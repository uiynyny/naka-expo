import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStackScreen from './RootStackScreen'
import { useAuthentication } from '../hooks/useAuthentication'
import MainStackScreen from './MainStackScreen'

const MainEntry = () => {
    const [user] = useAuthentication()
    return (
        <NavigationContainer>
            {user.isLoggedIn ? <MainStackScreen /> : <RootStackScreen />}
        </NavigationContainer>
    );
}

export default MainEntry