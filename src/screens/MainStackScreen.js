import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainTabScreen from './MainTabScreen';
import SettingScreen from './profile/SettingScreen';
import ViewScreen from './profile/ViewScreen';
import EditScreen from './profile/EditScreen';
import ChangePasswordScreen from './profile/ChangePasswordScreen';
import HelpAndSupportScreen from './profile/HelpAndSupportScreen';
import ReportScreen from './profile/ReportScreen';
import PrivacyScreen from './profile/PrivacyScreen';
import TermsAndConditions from './profile/TermsAndConditionsScreen';
import ModifyScreen from './profile/ModifyScreen';
import FeedbackScreen from './FeedbackScreen';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerBackTitle: 'Back' }}>
            <MainStack.Screen name="MainTabScreen" component={MainTabScreen} options={{ headerShown: false }} />
            {/*profile*/}
            <MainStack.Screen name="Feedback" component={FeedbackScreen} />
            <MainStack.Screen name="ModifyScreen" component={ModifyScreen} />
            <MainStack.Screen name="Setting" component={SettingScreen} />
            <MainStack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            <MainStack.Screen name="HelpAndSupportScreen" component={HelpAndSupportScreen} />
            <MainStack.Screen name={'TermsAndConditions'} component={TermsAndConditions} />
            <MainStack.Screen name="PrivacyPolicy" component={PrivacyScreen} />
            <MainStack.Screen name="ReportScreen" component={ReportScreen} />
            <MainStack.Screen name={"ViewScreen"} component={ViewScreen} />
            <MainStack.Screen name={"EditScreen"} component={EditScreen} options={{ title: 'Edit' }} />
            {/*message*/}
            {/* <MainStack.Screen name="RoomScreen" component={RoomScreen} />
            <MainStack.Screen name="UserProfileScreen" component={UserProfileScreen} /> */}
            {/*home*/}
            {/* <MainStack.Group screenOptions={{ presentation: 'modal' }}>
                <MainStack.Screen name="PreferenceScreen" component={PreferenceScreen} />
                <MainStack.Screen name='Option' component={Option} />
            </MainStack.Group> */}
            {/* {post} */}
            {/* <MainStack.Group screenOptions={{ presentation: 'modal' }}>
                <MainStack.Screen name="Post" component={PostScreen} />
            </MainStack.Group> */}
        </MainStack.Navigator>
    )
}

export default MainStackScreen