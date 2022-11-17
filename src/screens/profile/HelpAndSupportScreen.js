import React from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const reportSubtitle = 'This can also be done in the group by clicking the icon in the top right corner -> Report';

const HelpAndSupportScreen = (props) => {
    const { navigate } = props.navigation;

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            title: 'Contact Us',
        });
    }, []);

    const contactUsOnPress = () => Linking.openURL('mailto:naka.connect@gmail.com');

    const reportOnPress = navigate => navigate('ReportScreen');

    const GroupList = ({ title, subtitle, content }) => {
        return (
            <View style={{ marginVertical: 10 }}>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: '200' }}>{title}</Text>
                    {subtitle && <Text style={{ fontSize: 12, paddingHorizontal: 5 }}>{subtitle}</Text>}
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
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <Icon name="chevron-forward-outline" size={18} />
                            </ListItem>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const contact = [
        { name: 'Contact Us', action: contactUsOnPress },
    ];
    const report = [{ name: 'Emailing a report to us', action: reportOnPress }];

    return (
        <ScrollView style={{ flex: 1, marginTop: 20 }}>
            <GroupList title="Contact" content={contact} />
            <GroupList title="Report" content={report} subtitle={reportSubtitle} />
        </ScrollView>
    );
};
export default HelpAndSupportScreen;
