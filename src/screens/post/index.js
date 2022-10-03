import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { launchImageLibrary } from "react-native-image-picker";
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Geolocation from 'expo-location';
import { createContent, uploadImage } from '../../actions/content';


const PostScreen = ({navigation}) => {
    const user = useSelector(s => s.user);
    const [content, setContent] = useState("");
    const [images, setImages] = useState([0]);
    const [location, setLocation] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async()=>{
            let { status } = await Geolocation.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Geolocation.getCurrentPositionAsync({})
            setLocation(location.coords)
        })()
    })

    const onClose = () => navigation.goBack()

    const uploadAndGetImageUrls = async () => {
        return Promise.all(images.filter((v, i) => i != 0).map(async (v) => {
            return uploadImage(user.username, v);
        }))
    }
    const onSend = async () => {
        setLoading(true);
        if (content == "" && images.length == 1) {
            setLoading(false)
            return
        }
        let payload = {
            "username": user.username,
            "content": content,
            "imageUrls": await uploadAndGetImageUrls(),
            "timestamp": new Date().toISOString(),
            "location": [location.longitude, location.latitude]
        }
        console.log(payload)
        setLoading(false);
        createContent(payload).then(e => e.json())
        navigation.goBack();
        setContent('');
        setImages([0]);
    }

    const addImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.1,
            maxHeight: 400,
            maxWidth: 400,
        }, res => {
            if (res && res.assets) {
                res.assets.forEach((v) => {
                    v.path = v.uri.slice(8)
                    v.filename = v.fileName
                    v.mime = v.type
                    setImages(pre => ([...pre, v]))
                })
            }
        })
    }

    const deleteImage = async (index) => {
        let filtered = images.filter((v, i) => i !== index)
        setImages(filtered)
    }


    // renders
    return (<SafeAreaView style={styles.container}>
        <View style={{
            flexDirection: 'row',
            marginTop: 5,
            marginHorizontal: 20
        }}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }} onPress={onClose}><Icon name='close-outline' size={30} /></TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }} onPress={onSend} disabled={content == "" && images.length == 1}>
                {loading ? <ActivityIndicator color={'#144D7F'} /> : <Text style={{ fontSize: 20, color: content == "" && images.length == 1 ? "#ddd" : "#000" }}>Post</Text>}
            </TouchableOpacity>
        </View>
        <View style={styles.textAreaContainer}>
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder={' Share whatever you want to the people around you! \n p.s. everyone on naka could be able to see your post on the map'}
                placeholderTextColor="grey"
                keyboardType='twitter'
                numberOfLines={4}
                multiline={true}
                onChangeText={setContent}
                value={content}
            />
        </View>

        <FlatList
            horizontal
            data={images}
            style={{
                maxHeight: 120
            }}
            renderItem={({ item, index }) => {
                if (index === 0) {
                    return <TouchableOpacity style={{
                        width: 120,
                        height: 100,
                        borderWidth: 2,
                        borderRadius: 25,
                        borderColor: '#144D7F',
                        resizeMode: 'contain',
                        margin: 8,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={addImage}
                    ><Icon name='image-outline' size={30} /></TouchableOpacity>
                }
                return (
                    <View>
                        <View>
                            <Image
                                source={{ uri: item }}
                                resizeMode="contain"
                                style={{
                                    width: 120,
                                    height: 100,
                                    borderWidth: 2,
                                    borderRadius: 25,
                                    borderColor: '#144D7F',
                                    resizeMode: 'contain',
                                    margin: 8,
                                }}
                            />
                        </View>
                        <View style={{ position: 'absolute', marginLeft: 100, marginTop: 80, backgroundColor: '#144D7F', borderRadius: 50 }}>
                            <TouchableOpacity
                                key={index}
                                onPress={(e) => deleteImage(index)}
                            >
                                <Icon name='close-outline' size={30} style={{ color: 'white' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}
        />
    </SafeAreaView >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    contentContainer: {
    },
    textAreaContainer: {
        borderColor: '#656565',
        backgroundColor: '#eee',
        borderWidth: 0.1,
        borderRadius: 10,
        margin: 10,
    },
    textArea: {
        height: 150,
        justifyContent: 'flex-start',
        padding: 10,
    },
});

export default PostScreen;