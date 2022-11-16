import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MasonryList from '@react-native-seoul/masonry-list';
import { getContentByUser } from '../../actions/content';
import { SET_CONTENT, UPDATE_CONTENT } from '../../redux/actionTypes';
import Icon from 'react-native-vector-icons/Ionicons';
import { getUserByUsername } from '../../actions/user';
import { getImage } from '../../actions/image';

let placeholder = require('../../assets/images/image_ONBt.png')
const size = 200;
/*
* comment: []
content: "Asdas"
imageUrls: []
like: 0
location: {coordinates: Array(2), type: 'Point'}
timestamp: {$date: 1636698900433}
username: "Shokun"
_id: {$oid: '618e0d0bdebf1d82c060fd3c'}*/
const EventCard = ({ item }) => {
    return (
        <View style={{ margin: 5, flex: 1 }}>
            {item.imageUrls.length > 0 ?
                <Image source={{ uri: item.imageUrls[0] }} style={styles.image} /> :
                <ImageBackground style={styles.image}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontFamily: 'Baskerville-Italic', fontSize: 26 }}>{item.content}</Text>
                    </View>
                </ImageBackground>}
            <Text style={{ marginTop: 8 }}>{item.content}</Text>
        </View>
    );
};

const renderItem = ({ item }) => {
    return <EventCard item={item} key={item._id.$oid} />;
};

const ViewScreen = (props) => {

    const dispatch = useDispatch();
    const userinfo = useSelector(s => s.user);
    const userImg = useSelector(s => s.userImageCache);
    const content = useSelector(s => s.content[userinfo.username] ? s.content[userinfo.username] : []);
    const [user, setUser] = useState();

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: () => <Text>@{userinfo.username}</Text>,
            headerRight: () => <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => props.navigation.navigate('Setting')}>
                <Icon name={'ellipsis-horizontal-outline'} size={36} />
            </TouchableOpacity>
        });
    }, [userinfo])


    useEffect(() => {
        getUserByUsername(userinfo.username).then(setUser);
        getImage(userinfo.username).then(img => dispatch({ type: 'USER_IMAGE_UPDATE', payload: { [userinfo.username]: img } }));
    }, []);

    const getNextContent = useMemo(() => {
        async function serviceCall() {
            /**
             * "items":[]
             * "page": 1,
             * "pages": 8,
             * "per_page": 10,
             * "total": 80
             * */
            let res = await getContentByUser(userinfo.username, size, 1);
            dispatch({ type: SET_CONTENT, payload: { content: res.items, username: userinfo.username } });
        }
        if (content.length == 0) serviceCall();
    });


    return <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row' }}>
            <View style={[styles.photo, { margin: 20, alignSelf: 'center' }]}>
                <Image
                    source={userImg[userinfo.username] ? { uri: userImg[userinfo.username] } : placeholder}
                    style={styles.photo}
                    borderRadius={100}
                />
            </View>
            <View style={{ marginTop: 10, flex: 1 }}>
                <View style={{ flexDirection: 'row', width: '100%', padding: 10 }}>
                    {/* <Text style={{ margin: 5 }}>0</Text>
          <View style={{ margin: 5, width: 1, backgroundColor: '#909090' }}/>
          <Text style={{ margin: 5 }}>0</Text> */}
                </View>
                <Text style={{ margin: 10 }} numberOfLines={3}>{user?.bio}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#144D7F',
                            padding: 10,
                            width: 80,
                            borderRadius: 8,
                            margin: 10,
                            alignItems: 'center'
                        }}
                        onPress={() => props.navigation.navigate('EditScreen')}>
                        <Text style={{ color: '#fff' }}>Edit</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ borderRadius: 10, justifyContent: 'center' }}
            onPress={() => Linking.openURL('https://www.instagram.com/apple')}>
            <Icon name="logo-instagram" size={42} />
          </TouchableOpacity> */}
                </View>
            </View>
        </View>

        <MasonryList
            ListHeaderComponent={<View />}
            onRefresh={getNextContent}
            style={{ alignSelf: 'stretch', paddingHorizontal: 5 }}
            data={content}
            renderItem={renderItem}
            bounces={false}
        />
    </View>;
};
export default ViewScreen;

const styles = StyleSheet.create({
    photo: {
        height: 100,
        width: 100,
    },
    fontFamily: {
        fontFamily: 'Futura'
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        aspectRatio: 1, // Your aspect ratio
        borderRadius: 12,
        borderColor: '#FF0000',
        backgroundColor: '#f8f9fa'
    }
});