import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { SET_PROPERTY } from "../../redux/actionTypes";
import { updateUser } from "../../actions/user";
import CustomButton from '../../components/CustomButton';

const getType = (type) => {
    switch (type) {
        case 'Name':
            return 'name';
        case 'Birthday':
            return 'date_of_birth';
        case 'School':
            return 'school';
        case 'Ethnicity':
            return 'ethnicity';
        case 'Bio':
            return 'bio';
    }
}

const ModifyScreen = (props) => {

    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const user = useSelector(s => s.user);

    const t = props.route.params
    let k = Object.keys(t).length > 0 ? Object.keys(t)[0] : '';
    let v = Object.values(t).length > 0 ? Object.values(t)[0] : '';

    const onPress = () => {
        Keyboard.dismiss();
        dispatch({ type: SET_PROPERTY, payload: { [getType(k)]: content } })
        user.bio = content
        updateUser(user)
        props.navigation.goBack()
    }
    return <View >
        <Text style={{ fontSize: 20, margin: 20, marginBottom: 5 }}>Edit your {k}</Text>
        <View style={styles.textAreaContainer}>
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder={v}
                placeholderTextColor="grey"
                numberOfLines={1}
                onChangeText={setContent}
                value={content}
            />
        </View>
        <CustomButton
            onPress={onPress}
            style={{ marginVertical: 10, width: 100, alignSelf: 'center' }}
            innerStyle={content.length >= 10 && content.length <= 3000 ? { backgroundColor: '#144d7f' } : { backgroundColor: '#a2a2a2' }}
            content={'Confirm'} />
    </View>;
};
export default ModifyScreen;

const styles = StyleSheet.create({
    textAreaContainer: {
        borderColor: '#656565',
        backgroundColor: '#fff',
        borderWidth: 0.1,
        padding: 5,
        margin: 15,
        borderRadius: 10,
    },
    textArea: {
        // height: 150,
        padding: 10,
        justifyContent: 'flex-start'
    }
});
