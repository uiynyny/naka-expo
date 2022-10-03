import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import CheckButton from '../../components/CheckButton';
import { CommonStyles } from '../../components/styles';
import { SET_PROPERTY, LOGIN } from '../../redux/actionTypes';
import { checkUser, createUser } from '../../actions/user';
import { loginAction } from "../../redux/actions";
import { saveAPNToken } from "../../actions/token";
// import fcmSvc from "../../services/FCMSvc";

const title = 'Username';

const NickNameScreen = () => {
    const dispatch = useDispatch();
    const n = useSelector(s => s.user);
    const [err, setErr] = useState(null);
    const validateNameLocal = () => !/\s/.test(n.username) && n.username?.length && n.username.length >= 5 && n.username.length <= 15;
    const onSubmit = async () => {
        let ret = await checkUser('username', n.username);
        if (ret) {
            setErr('username already taken');
            return;
        }
        setErr(null);
        createUser(n)
            .then((res) => {
                if (res.ok) {
                    let token = loginAction(n);
                    dispatch({ type: LOGIN, payload: { token: token } })
                    // fcmSvc.getFcmToken().then(t => saveAPNToken(user.username, t))
                } else {
                    throw res.json();
                }
            })
            .catch((rej) => {
                alert('registration failed, please check other fields');
            });
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={CommonStyles.container}>
                <Text style={[CommonStyles.title, err !== null && { color: '#f2235e' }]}>{err ? err : title}</Text>
                <View style={[CommonStyles.InputRow, { marginTop: 50 }]}>
                    <TextInput
                        style={CommonStyles.Input}
                        placeholder="put it here!"
                        value={n.username}
                        maxLength={15}
                        onChangeText={(name)=>dispatch({type: SET_PROPERTY,payload: { username: name }})}
                    />
                </View>
                <View style={CommonStyles.checkButton}>
                    <CheckButton onPress={onSubmit} disabled={!validateNameLocal()} />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default NickNameScreen;
