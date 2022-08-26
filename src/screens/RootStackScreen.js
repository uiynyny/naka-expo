import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import LoginScreen from './signFlow/LoginScreen';
import VerificationScreen from './signFlow/VerificationScreen';
import PhoneVerificationScreen from './PhoneVerificationScreen';


const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="VerificationScreen" component={VerificationScreen}/>
        <RootStack.Screen name="PhoneVerificationScreen" component={PhoneVerificationScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
