import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import CheckButton from '../../components/CheckButton';
import { CommonStyles } from '../../components/styles';
import { SET_PROPERTY, LOGIN } from '../../redux/actionTypes';
import { checkUser, createUser } from '../../actions/user';
import { loginAction } from "../../redux/actions";
import { saveAPNToken } from "../../actions/token";
import fcmSvc from "../../services/FCMSvc";

const title = 'Username';

const NickNameScreen = (props) => {
    const { navigate } = props.navigation;

    const dispatch = useDispatch();
    const n = useSelector(s => s.user);
    const [name, setName] = useState(n.username ? n.username : '');
    const [err, setErr] = useState(null);
    const validateNameLocal = () => !/\s/.test(name) && name.length >= 5 && name.length <= 15;
    const onSubmit = async () => {
        let ret = await checkUser('username', name);
        if (ret) {
            setErr('username already taken');
            return;
        }
        setErr(null);
        dispatch({
            type: SET_PROPERTY,
            payload: { username: name },
        });
        n.username = name;
        console.log(n);
        createUser(n)
            .then((res) => {
                if (res.ok) {
                    let token = loginAction(n);
                    dispatch({ type: LOGIN, payload: { token: token } })
                    fcmSvc.getFcmToken().then(t => saveAPNToken(user.username, t))
                } else {
                    throw res.json();
                }
            })
            .catch((rej) => {
                console.log(rej)
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
                        value={name}
                        maxLength={15}
                        onChangeText={v => setName(v)}
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
