import React, { useCallback, useState } from 'react';
import { Image, Keyboard, Text, TextInput, TouchableWithoutFeedback, View, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CheckButton from '../../components/CheckButton';
import { CommonStyles } from '../../components/styles';
import { SET_PROPERTY } from '../../redux/actionTypes';
import { checkUser } from '../../actions/user';

const nextScreen = "VerificationScreen"
const title = 'What\'s your email?';

const EmailScreen = (props) => {
    const { navigate } = props.navigation;

    const e = useSelector(s => s.user.email ? s.user.email : null);
    const [email, setEmail] = useState(e);
    const [err, setErr] = useState(null);
    const dispatch = useDispatch();

    const validateEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return !reg.test(email);
    };
    const onEmailChange = (v) => setEmail(v.trim());

    const onSubmit = async () => {
        let ret = await checkUser('email', email);
        if (ret) {
            navigate(nextScreen, { email: email })
            return;
        }

        setErr(null);
        dispatch({
            type: SET_PROPERTY,
            payload: { email: email },
        });
        navigate(nextScreen);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={CommonStyles.container}>
                <Text
                    style={[CommonStyles.title, { marginHorizontal: 50 }, err !== null && { color: '#f2235e' }]}>{err ? err : title}
                </Text>
                <View style={CommonStyles.InputRow}>
                    <TextInput
                        placeholder="Your Email"
                        value={email}
                        style={CommonStyles.Input}
                        onChangeText={onEmailChange}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                    />
                </View>
                <Text style={{
                    color: '#555',
                    marginHorizontal: 60,
                    textAlign: 'center',
                }}>
                    So you can recover your password!
                </Text>
                <View style={CommonStyles.checkButton}>
                    <CheckButton onPress={onSubmit} disabled={validateEmail()} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default EmailScreen;
