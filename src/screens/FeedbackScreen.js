import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { createSupportRequest } from '../actions/support';
import CustomButton from '../components/CustomButton';

const FeedbackScreen = () => {
    const [content, setContent] = useState('');
    const user = useSelector(s => s.user);

    return <View>
        <Text style={{ fontSize: 20, margin: 20, marginBottom: 5 }}>What could we improve?</Text>
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
            onPress={() => {
                let payload = {
                    category: 'Feedback',
                    username: user.username,
                    message: content,
                    reportedUsername: null,
                    subcategory: 'Custom Feedback',
                };
                createSupportRequest(payload).then(console.log);
                Alert.alert('Feedback received', 'Thank you for your feedback',);
            }}
            disabled={content.length < 10 || content.length > 3000}
            style={{ marginVertical: 10, marginHorizontal: 160 }}
            innerStyle={content.length >= 10 && content.length <= 3000 ? { backgroundColor: '#144d7f' } : { backgroundColor: '#a2a2a2' }}
            content={'Submit'} />
    </View>;
};
export default FeedbackScreen;

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
        height: 150,
        padding: 10,
        justifyContent: 'flex-start'
    }
});
