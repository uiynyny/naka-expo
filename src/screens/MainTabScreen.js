import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import MapScreen from './map/MapScreen';
import NotifScreen from './notification';
import PostScreen from './post';
import ViewScreen from './profile/ViewScreen';

const profile = require('../assets/images/ic_person_24px.png');
const profile_m = require('../assets/images/ic_person_outline_24px.png');

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MapStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{ tabBarActiveTintColor: '#144D7F', tabBarInactiveTintColor: 'gray', headerShown: false }}>
            {/* <Tab.Screen
                name={'Map'}
                component={MapStackScreen}
                options={{
                    tabBarLabel: () => <></>,
                    tabBarIcon: ({focused, color}) => (
                        <View>
                            <Icon name="map-outline" size={30} color={color}/>
                        </View>)
                }}
            /> */}
            <Tab.Screen
                name='Notification'
                component={NotificationTab}
                options={{
                    tabBarLabel: () => <></>,
                    tabBarIcon: ({ focused, color }) => (<Icon name='notifications' size={30} color={color} />)
                }}
            />
            <Tab.Screen
                name="Post"
                component={PostScreen}
                options={{
                    tabBarLabel: () => {// do nothing
                    },
                    tabBarIcon: ({ focused, color }) => (<View>
                        <Icon name="add-circle" size={50} color={color} />
                    </View>)
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                // initialParams={{ 'username': user.username }}
                options={{
                    tabBarLabel: () => {// do nothing
                    },
                    tabBarIcon: ({ focused }) => (<Image source={focused ? profile : profile_m} />)
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen

const NotificationTab = () => <NotificationStack.Navigator>
    <NotificationStack.Screen
        name='NotifScreen'
        component={NotifScreen}
        options={{
            title: 'Activity',
            headerStyle: {
                backgroundColor: 'transparent',
            },
        }}
    />
</NotificationStack.Navigator>

const MapStackScreen = () => <MapStack.Navigator>
    <MapStack.Screen name="NAKA" options={{ headerShown: false }} component={MapScreen} />
</MapStack.Navigator>

const ProfileStackScreen = (props) => <ProfileStack.Navigator>
  {/*<ProfileStack.Screen name="ProfileTab" component={ProfileTabScreen}/>*/}
  <ProfileStack.Screen name="ViewScreen" component={ViewScreen} 
//   initialParams={{ 'username': props.route.params.username }} 
  />
</ProfileStack.Navigator>;