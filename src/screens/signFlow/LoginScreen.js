import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, StyleSheet } from 'react-native';
import PhoneNumberScreen from './PhoneNumberScreen';
import EmailScreen from './EmailScreen';

const LoginTab = createMaterialTopTabNavigator();

const LoginScreen = () => {
    return (
        <LoginTab.Navigator screenOptions={{
            tabBarActiveTintColor: '#144D7F',
            tabBarInactiveTintColor: '#656565',
            tabBarIndicatorStyle: styles.indicatorStyle,
        }} style={{ marginTop: '20%' }}>
            <LoginTab.Screen name="Phone" component={PhoneNumberScreen} />
            <LoginTab.Screen name="Email" component={EmailScreen} />
        </LoginTab.Navigator>
    );
};

export default LoginScreen;

const totalWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    indicatorStyle: {
        width: totalWidth / 4,
        left: totalWidth / 8,
        backgroundColor: '#144D7F',
    }
});
