import React, { useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Keyboard, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { CommonStyles } from '../../components/styles';
import CheckButton from '../../components/CheckButton';
import { encrypt, loginAction, validateCodeToServer } from '../../redux/actions';
import { LOGIN, SET_PROPERTY } from '../../redux/actionTypes';
import { resetPassword } from "../../actions/user";
import { saveAPNToken } from '../../actions/token';
// import fcmSvc from '../../services/FCMSvc';
// import { fbLogin, fbLoginEvent } from '../../services/FirebaseAnalytic';

const nextScreen = 'NickNameScreen';

const VerificationScreen = (props) => {
    const { navigate } = props.navigation;
    const { params } = props.route;
    const dispatch = useDispatch();
    const [title, setTitle] = useState('Create New Password');
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [pass, setPass] = useState('');
    const up_low_num = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    const validatePass = () => up_low_num.test(pass);
    const [forgetPassword, setForgetPassword] = useState(false);

    useLayoutEffect(() => {
        if (params?.email) {
            setTitle('Log in with password');
            setForgetPassword(true);
        }
        Keyboard.dismiss();
    }, []);

    const signInUser = (user) => {
        // fbLogin();
        // fbLoginEvent(user.username);
        let token = loginAction(user);
        dispatch({ type: LOGIN, payload: { ...user, token } });
        // fcmSvc.getFcmToken().then(fcmToken => saveAPNToken(user.username, fcmToken).then(console.log));
    };

    const onPassChange = p => setPass(p.trim());

    const onResetPress = () => {
        resetPassword(params.email)
        Alert.alert("Email Sent", "we've just sent you a secret password so you can log in and change your password in the settings")
    }

    const onSubmit = async () => {
        setLoading(true);
        //password validation
        if (!validatePass()) {
            setLoading(false);
            setErr('invalid password');
            return;
        }
        //user exists
        if (params?.email) {
            let result = await validateCodeToServer(params.email, pass);
            setLoading(false);
            if (result) {
                signInUser(result);
            } else {
                setErr('incorrect password', result);
            }
        } else {
            //register new user
            dispatch({
                type: SET_PROPERTY,
                payload: { password: encrypt(pass) }
            });
            setLoading(false);
            navigate(nextScreen);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={CommonStyles.container} pointerEvents={loading ? 'none' : 'auto'}>
                <Modal transparent={true} animationType={'none'} visible={loading}>
                    <View style={styles.modalBackground}>
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator size={'large'} color={'#5c8edc'} animating={loading} />
                            <Text style={styles.verificationTitle}>please wait...</Text>
                        </View>
                    </View>
                </Modal>
                <Text style={[CommonStyles.title, err !== null && styles.err]}>{err === null ? title : err}</Text>
                <TextInput style={styles.textInput} value={pass} onChangeText={onPassChange}
                    secureTextEntry
                    placeholder="enter your password" autoCompleteType="password" keyboardType="default" />
                <Text style={{ color: '#555', marginHorizontal: 60, textAlign: 'center', }}>at least 6 characters long, at least one lower case character, one upper case character and one digit.</Text>
                <View style={CommonStyles.checkButton}><CheckButton onPress={() => onSubmit()} disabled={!validatePass()} /></View>
                {forgetPassword ? <Button style={{ margin: 5 }} title={"Forget Password"} onPress={onResetPress} /> : <></>}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    textInput: {
        color: '#000',
        marginTop: 70,
        margin: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        height: 50,
        width: 200,
        fontSize: 18,
        borderRadius: 5,
        borderBottomColor: 'gray',
        textAlign: 'center',
    },
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

export default VerificationScreen;
