import React, { useState } from 'react';
import { Alert, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Picker } from '@react-native-picker/picker';

import CheckButton from '../../components/CheckButton';
import { CommonStyles } from '../../components/styles';
import CountryCode from '../../model/phone_code.json';
import { SET_PROPERTY } from '../../redux/actionTypes';

const nextScreen = 'PhoneVerificationScreen';

const PhoneNumberScreen = ({ navigation }) => {
    const { navigate } = navigation;
    const [phonePrefix, setPhonePrefix] = useState('+1');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    const onPhoneNumberChange = (v) => {
        v = v.replace(/\D/g, '');
        setPhoneNumber(v);
    };
    const setCountryCode = (prefix) => {
        if (!prefix.startsWith('+')) {
            console.warn('incorrect selection ', prefix);
        }
        setPhonePrefix(prefix);
    };
    const validatePhoneNumber = () => phoneNumber.length <= 12 && phoneNumber.length >= 5
    const validatePhonePrefix = () => phonePrefix.length !== 0

    const checkUserPhoneNumber = async () => {
        if (!validatePhoneNumber() || !validatePhonePrefix()) {
            Alert.alert('Wrong Input!', 'wrong phone number given', phonePrefix, phoneNumber)
            return;
        }
        let phone = phonePrefix + phoneNumber;
        dispatch({ type: SET_PROPERTY, payload: { phone: phone }, });
        navigate(nextScreen);
    };

    return (<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={CommonStyles.container}>
            <Text style={CommonStyles.title}>What's your number?</Text>
            <View style={styles.phoneGroup}>
                <Picker
                mode='dialog'
                    selectedValue={phonePrefix}
                    onValueChange={(v) => setCountryCode(v)}
                >
                    {CountryCode.map(({ name, dial_code, code }) => <Picker.Item key={code} label={`${name} ${dial_code}`} value={`${dial_code}`} />)}
                </Picker>
                <View style={styles.phoneBox}>
                    <TextInput onChangeText={onPhoneNumberChange} maxLength={12} style={styles.textInput}
                        placeholder="Phone Number" autoCompleteType="tel" keyboardType="number-pad"
                        value={phoneNumber} />
                </View>
            </View>
            <View style={CommonStyles.checkButton}>
                <CheckButton onPress={checkUserPhoneNumber} disabled={!validatePhoneNumber()} />
            </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>);
};

const styles = StyleSheet.create({
    phoneGroup: {
        marginTop: 40,
    },
    phoneBox: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textInput: {
        margin: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        height: 40,
        width: 200,
        fontSize: 18,
        borderRadius: 5,
        borderBottomColor: 'gray',
        textAlign: 'center',
    },
});

export default PhoneNumberScreen;
