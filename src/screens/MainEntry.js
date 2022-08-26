import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStackScreen from './RootStackScreen'
import { useAuthentication } from '../hooks/useAuthentication'

const MainEntry = () => {
    return (
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    );
}

export default MainEntry