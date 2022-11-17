import React, { useState } from 'react';
import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
// import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/CustomButton';
import { getMatchedUsernames } from '../../actions/match';
import { createSupportRequest } from '../../actions/support';
import { pickerStyles } from '../../components/styles';
import reportCategory from '../../model/reportCategory.json';




const ReportScreen = (props) => {
    const user = useSelector(s => s.user);
    const [content, setContent] = useState('');
    const [listUsers, setListUsers] = useState([]);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            title: 'Report',
        });
    }, []);

    React.useEffect(() => {
        getMatchedUsernames(user.username)
            .then(r => setListUsers(r.filter(v => v !== user.username)));
    }, []);

    const submitOnPress = () => {
        Alert.alert('Report received', 'Thanks for submitting report. We will review your request and get back to you');
        let payload = {
            category: 'Report',
            subcategory: 'Custom report',
            reportedUsername: null,
            username: user.username,
            message: content
        };
        createSupportRequest(payload);
        setContent('')
    };

    return (<SafeAreaView style={{ padding: 5, flex: 1, }}>
        <Text style={{ fontSize: 16, color: '#666', margin: 20, marginBottom: 5, textAlign: 'center' }}>We won't tell</Text>
        <View style={styles.textAreaContainer}>
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="10 to 3000 characters"
                placeholderTextColor="grey"
                numberOfLines={4}
                multiline={true}
                onChangeText={text => setContent(text)}
                value={content}
            />
        </View>
        <CustomButton
            onPress={submitOnPress}
            disabled={content.length < 10 || content.length > 3000}
            style={{ marginVertical: 10, marginHorizontal: 160 }}
            innerStyle={content.length >= 10 && content.length <= 3000 ? { backgroundColor: '#144d7f' } : { backgroundColor: '#a2a2a2' }}
            content={'Submit'} />
    </SafeAreaView>);
};
export default ReportScreen;

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
        height: 150,
        justifyContent: 'flex-start',
    },
});
