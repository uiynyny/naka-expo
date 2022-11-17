import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ListItem } from 'react-native-elements';
import { getNotification } from '../../actions/notification';
import { useDispatch, useSelector } from 'react-redux';
import { getImage } from '../../actions/image';
import Modal from 'react-native-modal'
import { getContentById } from '../../actions/content';
import CustomCallout from '../map/CustomCallout';


const NotifScreen = (props) => {

    const user = useSelector(s => s.user)
    const [notifications, setNotifications] = useState([])
    const [renderChildren, setRenderChildren] = useState([]);
    const userImage = useSelector(s => s.userImageCache)
    const content = useSelector(s => s.content)
    const dispatch = useDispatch()
    const [showmodal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showmodal);

    useEffect(() => {
        fetchdata = async () => {
            let notifications = await getNotification(user.username)
            notifications.items.forEach(v => {
            });
            setNotifications(notifications.items)
        }
        fetchdata()
    }, [])

    async function showContent(id) {
        let content = await getContentById(id)
        console.log(content)
    }

    const generateNotificationList = () => notifications.map((v, i) => {
        getImage(v.from_user).then(res => dispatch({ type: 'USER_IMAGE_UPDATE', payload: { [v.from_user]: res } }))

        return (<TouchableOpacity key={v._id.$oid} onPress={() => showContent(v._id.$oid)}>
            <ListItem containerStyle={{ borderRadius: 10, marginHorizontal: 5, marginVertical: 3, backgroundColor: 'transparent' }}>
                <View style={styles.imgCropper}>
                    <Image source={userImage[v.from_user]}
                        style={styles.avatar} />
                </View>
                <ListItem.Content>
                    <ListItem.Title style={styles.username}>{v.from_user}</ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>liked your post</ListItem.Subtitle>
                    <ListItem.Subtitle style={styles.subtitle}>{new Date(v.timestamp.$date).toLocaleString()}</ListItem.Subtitle>
                </ListItem.Content>
                <Image source={content[user.username]} style={{ height: 50, width: 50, resizeMode: 'cover' }} />
            </ListItem>
        </TouchableOpacity>)
    })

    return (
        <>
            <ScrollView style={{ flex: 1, marginVertical: 10 }}>
                <View style={{ marginHorizontal: 10 }}><Text style={{ fontWeight: '100' }}>This month</Text></View>
                {generateNotificationList()}
            </ScrollView>
            {/* <Modal isVisible={showmodal} onBackdropPress={toggleModal}>
                <CustomCallout content={renderChildren} toggle={toggleModal} navigation={props.navigation} />
            </Modal> */}
        </>
    )
}

export default NotifScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    imgCropper: {
        margin: 2,
        marginLeft: 0,
        borderRadius: 50,
        width: 30,
        height: 30,
        overflow: 'hidden',
    },
    username: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: 3,
        fontSize: 12,
    }
})