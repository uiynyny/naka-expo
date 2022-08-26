import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Image, Keyboard, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import CheckButton from '../components/CheckButton';
import { ACTIVE_CELL_BG_COLOR, CELL_BORDER_RADIUS, CELL_SIZE, CommonStyles, DEFAULT_CELL_BG_COLOR, NOT_EMPTY_CELL_BG_COLOR, VerificationStyles } from '../components/styles';

// import firebaseSvc from '../../services/FirebaseSvc';
// import { fbLogin, fbLoginEvent } from '../../services/FirebaseAnalytic';
// import fcmSvc from '../../services/FCMSvc';

import app from '../config/firebase'
import { loginAction } from '../redux/actions';
import { LOGIN } from '../redux/actionTypes';
import { saveAPNToken } from '../actions/token';
import { authorizeUser, getUserByPhone } from "../actions/user";
import { signInWithPhone } from '../hooks/useAuthentication';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';

const logo = require('../assets/images/Logo.png');
const RESEND_OTP_TIME_LIMIT = 30; // 30 secs
const nextScreen = 'NickNameScreen';

const { Value, Text: AnimatedText } = Animated;
const CELL_COUNT = 6;
const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
    Animated.parallel([
        Animated.timing(animationsColor[index], {
            useNativeDriver: false,
            toValue: isFocused ? 1 : 0,
            duration: 250,
        }),
        Animated.spring(animationsScale[index], {
            useNativeDriver: false,
            toValue: hasValue ? 0 : 1,
            duration: hasValue ? 300 : 250,
        }),
    ]).start();
};

const PhoneVerificationScreen = ({ navigation }) => {
    const { navigate } = navigation;
    const dispatch = useDispatch();
    const user = useSelector(s => s.user);
    const [userContent, setUserContent] = useState();
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [value, setValue] = useState('');
    const [confirmation, setConfirmation] = useState();
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(RESEND_OTP_TIME_LIMIT);
    const ref = useBlurOnFulfill({ value: value, cellCount: CELL_COUNT });
    const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const recaptchaVerifier = useRef(null);

    let resendOtpTimerInterval;
    const title = 'Verification Code';

    async function loginWithPhone() {
        console.log('here')
        let phoneProvider = new PhoneAuthProvider();
        phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current).then(setConfirmation)
    }

    const confirmCode = () => {
        const cre = PhoneAuthProvider.credential(confirmation,value)
        signInWithCredential(cre).then(res=>console.log(res))
    }

    const signInUser = (user) => {
        // save data locally then save to redux
        // fbLogin();
        // fbLoginEvent(user.username);
        let token = loginAction(user);
        dispatch({ type: LOGIN, payload: { ...user, token } });
        // fcmSvc.getFcmToken().then(token => saveAPNToken(user.username, token));
    };

    useEffect(() => {
        getUserByPhone(user.phone).then(userContent => setUserContent(userContent));
    }, [user])

    useEffect(() => {
        loginWithPhone();
    }, []);

    useEffect(() => onSubmit(), [value]);
    useEffect(() => {
        startResendOtpTimer();
        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime]);

    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= 0) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - 1);
            }
        }, 1000);
    };

    const onResendOtpButtonPress = () => {
        setValue('');
        setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
        startResendOtpTimer();
        loginWithPhone();
    };

    const onSubmit = React.useCallback(() => {
        let mounted = true;
        if (!validateCode()) {
            console.log('VerificationScreen : on Submit ' + value);
            setLoading(true);
            confirmation.confirm(value).then(res => {
                if (userContent) {
                    signInUser(userContent);
                } else {
                    navigate(nextScreen);
                }
            }).catch(rej => {
                console.log(rej);
                setErr('incorrect validation\n please try again.');
            }).finally(() => {
                if (mounted) {
                    setLoading(false);
                    setValue('');
                }
            });
        }
        return () => mounted = false;
    }, [value]);

    const validateCode = () => value.length !== 6;
    const renderCell = ({ index, symbol, isFocused }) => {
        const hasValue = Boolean(symbol);
        const animatedCellStyle = {
            backgroundColor: hasValue
                ? animationsScale[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                })
                : animationsColor[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                }),
            borderRadius: animationsScale[index].interpolate({
                inputRange: [0, 1],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
            }),
            transform: [
                {
                    scale: animationsScale[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.2, 1],
                    }),
                },
            ],
        };

        // Run animation on next event loop tik
        // Because we need first return new style prop and then animate this value
        setTimeout(() => {
            animateCell({ hasValue, index, isFocused });
        }, 0);

        return (
            <AnimatedText
                key={index}
                style={[VerificationStyles.cell, animatedCellStyle]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
            </AnimatedText>
        );
    };

    

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView
                style={CommonStyles.container}
                pointerEvents={loading ? 'none' : 'auto'}>
                <Modal transparent={true} animationType={'none'} visible={loading}>
                    <View style={styles.modalBackground}>
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator size={'large'} color={'#5c8edc'} animating={loading} />
                            <Text style={styles.verificationTitle}>please wait...</Text>
                        </View>
                    </View>
                </Modal>
                <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={app.options} />
                <Text style={[CommonStyles.title, err !== null && styles.err]}>{err === null ? title : err}</Text>
                <CodeField ref={ref}{...codeFieldProps} value={value} onChangeText={setValue} cellCount={CELL_COUNT}
                    rootStyle={{
                        height: CELL_SIZE,
                        marginTop: 30,
                        paddingHorizontal: 20,
                        justifyContent: 'center'
                    }}
                    keyboardType="number-pad" textContentType="oneTimeCode" renderCell={renderCell} />
                <View style={CommonStyles.checkButton}>
                    <CheckButton onPress={() => onSubmit()} disabled={validateCode()} />
                </View>
                <TouchableOpacity disabled={resendButtonDisabledTime > 0} onPress={onResendOtpButtonPress}>
                    <Text style={styles.resend}>
                        Resend Verification Code ({resendButtonDisabledTime})
                    </Text>
                </TouchableOpacity>
                <Image source={logo} resizeMode="contain" style={CommonStyles.logo} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    err: { color: 'red' },
    placeholderRow: {
        height: 49,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resend: {
        color: '#9B9B9B',
        fontSize: 16,
        marginTop: 50,
    },
    verificationView: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#464C4Eff',
    },
    verificationTitle: {
        fontFamily: 'Hiragino Sans',
        paddingTop: 10,
        fontSize: 12,
        color: 'rgba(48,48,50,0.6)',
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PhoneVerificationScreen;
