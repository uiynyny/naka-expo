import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import MapScreen from './map/MapScreen';
import NotifScreen from './notification';
import PostScreen from './post';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MapStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#144D7F', tabBarInactiveTintColor: 'gray', headerShown: false }}>
        <Tab.Screen
          name={'Map'}
          component={MapStackScreen}
          options={{
            tabBarLabel: () => {// do nothing
            },
            tabBarIcon: ({ focused, color }) => (
              <View>
                <Icon name="map-outline" size={30} color={color} />
              </View>)
          }}
        />
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
        {/*} <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          initialParams={{ 'username': user.username }}
          options={{
            tabBarLabel: () => {// do nothing
            },
            tabBarIcon: ({ focused }) => (<Image source={focused ? profile : profile_m} />)
          }}
        /> */}
      </Tab.Navigator>
    </View>
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
  <MapStack.Screen name="NAKA" options={{ headerShown: false }} component={MapScreen}/>
</MapStack.Navigator>
