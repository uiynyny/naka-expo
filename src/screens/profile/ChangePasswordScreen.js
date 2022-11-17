import React, { useState } from 'react';
import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { updateUser } from '../../actions/user';
import CustomButton from '../../components/CustomButton';
import { encrypt } from '../../redux/actions';

const ChangePasswordScreen = (props) => {
    const user = useSelector(s => s.user)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errMsg, nErrMsg] = useState(null)
    const up_low_num = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    const validatePass = () => up_low_num.test(password);

    const onSubmit = () => {
        if (!password) {
            nErrMsg('can\'t leave it empty')
            return;
        } else if (!validatePass()) {
            nErrMsg('invalid password ):')
        } else if (password !== confirmPassword) {
            nErrMsg(`your passwords don't match`)
        } else {
            user.password = encrypt(password)
            updateUser(user)
            Alert.alert(`hope you don't forget it again xD`)
        }
    }

    return (<SafeAreaView style={{ padding: 5, flex: 1, }}>
        <Text style={{ fontSize: 16, color: '#666', marginTop: 40, marginBottom: 5, textAlign: 'center' }}>new password</Text>
        <View style={{ marginTop: 50 }}>
            <View style={styles.textAreaContainer}>
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="enter new password"
                    placeholderTextColor="grey"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.textAreaContainer}>
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="renter new password"
                    placeholderTextColor="grey"
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                    secureTextEntry={true}
                />
            </View>
        </View>
        <Text style={styles.text}>at least 6 characters, one lower case, one upper case and one digit</Text>
        <Text style={styles.notif}>{errMsg}</Text>
        <View style={{ marginTop: 50 }}>
            <CustomButton
                onPress={onSubmit}
                disabled={false}
                style={{ marginVertical: 10, marginHorizontal: 140 }}
                innerStyle={true ? { backgroundColor: '#144d7f' } : { backgroundColor: '#a2a2a2' }}
                content={'Submit'} />
        </View>

    </SafeAreaView>);
};
export default ChangePasswordScreen

const styles = StyleSheet.create({
    textAreaContainer: {
        minWidth: Dimensions.get('screen').width / 2,
        borderColor: '#656565',
        backgroundColor: '#fff',
        borderWidth: 0.1,
        borderRadius: 10,
        padding: 5,
        margin: 15,
    },
    textArea: {
        height: 30,
    },
    text: {
        textAlign: 'center',
        marginHorizontal: 50,
        marginTop: 5,
    },
    notif: {
        marginTop: 30,
        marginHorizontal: 50,
        color: 'red',
        textAlign: 'center',
    }
});