import React from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import { logoutAction } from '../../redux/actions';
import { LOGOUT } from '../../redux/actionTypes';
import Icon from 'react-native-vector-icons/Ionicons';
import { deleteAPNToken } from '../../actions/token';

const SettingScreen = (props) => {
    const { navigate } = props.navigation;

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const logOutOnPress = navigate => {
        logoutAction();
        deleteAPNToken(user.username)
        dispatch({ type: LOGOUT });
    };

    const memberShipOnPress = navigate => { console.log('MemberShip'); };

    const userPhoneOnPress = () => { };

    const userEmailOnPress = () => { };

    const passwordResetOnPress = (navigate) => navigate('ChangePasswordScreen');

    const privacyOnPress = (navigate) => navigate('PrivacyPolicy');

    const termServiceOnPress = (navigate) => navigate('TermsAndConditions');

    const helpAndSupportOnPress = navigate => navigate('HelpAndSupportScreen');

    const deleteAccountOnPress = (navigate) => {
        Alert.alert('Delete Confirmation',
            'Account will be deleted within 30 business days. Are you sure you want to delete your account?',
            [{ text: 'Cancel', style: 'cancel' },
            {
                text: 'Confirm', onPress: () => {
                    Alert.alert('Account will be deleted', 'You can log out now.');
                }, style: 'destructive',
            }],
            { cancelable: false },
        );
    };

    const GroupList = ({ title, content, icon, textStyle }) => {
        return (
            <View style={{ marginVertical: 10 }}>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: '200' }}>{title}</Text>
                </View>
                {content.map((item, i) => (
                    <TouchableOpacity key={i} onPress={() => item.action(navigate)}>
                        <View>
                            <ListItem
                                containerStyle={{
                                    borderRadius: 10,
                                    marginHorizontal: 5,
                                    marginVertical: 3,
                                }}>
                                <ListItem.Content>
                                    <ListItem.Title style={textStyle}>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                {icon && <Icon name="chevron-forward-outline" size={18} />}
                            </ListItem>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const contact = [
        { name: user.phone, action: userPhoneOnPress },
        { name: user.email, action: userEmailOnPress },
    ];
    const resetPassword = [{ name: "reset password", action: passwordResetOnPress }]
    const membership = [{ name: 'Membership', action: memberShipOnPress }];
    const contactUs = [{ name: 'Help & Support', action: helpAndSupportOnPress }];
    const legal = [
        { name: 'Privacy & Cookie Policy', action: privacyOnPress },
        { name: 'Term of Service', action: termServiceOnPress },
    ];
    const logout = [{ name: 'Log Out', action: logOutOnPress }];
    const purge = [{ name: 'Delete Account', action: deleteAccountOnPress }];

    return (
        <ScrollView style={{ flex: 1, paddingTop: 10 }}>
            <GroupList title="Phone and Email" content={contact} icon={false} />
            <GroupList title="Reset password" content={resetPassword} icon={true} />
            {/* <GroupList title="Membership" content={membership} /> */}
            <GroupList title="Contact us" content={contactUs} icon={true} />
            <GroupList title="Legal" content={legal} icon={true} />
            <GroupList title="" content={logout} textStyle={{ alignSelf: 'center' }} />
            <GroupList title="" content={purge} textStyle={{ alignSelf: 'center' }} />
        </ScrollView>
    );
};
export default SettingScreen;
