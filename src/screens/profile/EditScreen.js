import React, { useCallback, useRef } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListItem } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import Animated from 'react-native-reanimated';
// import ImagePicker from 'react-native-image-crop-picker';
import * as ImagePicker from 'expo-image-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import { bottomSheetStyles } from '../../components/styles';
import { updateImage } from '../../actions/image';
import { renderHeader } from '../../components/CustomBottomSheet';
import { uploadImage } from '../../actions/content';
import { useForegroundPermissions } from 'expo-location';

const imageHolder = require('../../assets/images/image_ONBt.png');

const myInfo = ['Bio'];
const feedBack = ['Feedback'];
// const setting = ['Setting'];

const IMAGE_SIZE = 150;
const GroupList = ({ title, content, value, navigate, icon }) => {
    return <View style={{ flex: 1, marginVertical: 20 }}>
        <View style={{ marginHorizontal: 10 }}><Text style={{ fontWeight: '200' }}>{title}</Text></View>
        {content.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => {
                if (value === undefined) {
                    navigate(item)
                } else {
                    navigate("ModifyScreen", { [item]: value[i] });
                }
            }}>
                <View>
                    <ListItem containerStyle={{ borderRadius: 10, marginHorizontal: 5, marginVertical: 3 }}>
                        <ListItem.Content>
                            <ListItem.Title>{item}</ListItem.Title>
                        </ListItem.Content>
                        {value !== undefined ?
                            <Text>{value[i]}</Text> : <></>
                        }
                        {icon && <Icon name="chevron-forward-outline" size={18} />}
                    </ListItem>
                </View>
            </TouchableOpacity>))}
    </View>;
};

const EditScreen = (props) => {
    const { navigate } = props.navigation;
    const dispatch = useDispatch();
    const user = useSelector(s => s.user);
    const userImages = useSelector(s => s.userImageCache);

    const bs = useRef(null);
    const fall = useRef(new Animated.Value(1));
    const [status, requestPermission] = ImagePicker.useCameraPermissions({request:true});

    let userInfo = [
        user.bio,
        // user.date_of_birth,
        // user.school,
        // user.ethnicity,
    ];

    const resolve = useCallback(async (img) => {
        bs.current.snapTo(1);
        let url = await uploadImage(user.username, img)
        dispatch({ type: 'USER_IMAGE_UPDATE', payload: { [user.username]: url } });
        updateImage(user.username, url);
    }, []);

    const takePhotoFromCamera = async () => {
        let pickerResult = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 0.5,
        });
        resolve(pickerResult);
    };

    const choosePhotoFromLibrary = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 0.5,
        });
        resolve(pickerResult);
    };

    const renderInner = () => (<View style={bottomSheetStyles.panel}>
        <View style={{ alignItems: 'center' }}>
            <Text style={bottomSheetStyles.panelTitle}>Upload Photo</Text>
            <Text style={bottomSheetStyles.panelSubtitle}>
                Choose Your Profile Picture
            </Text>
        </View>
        <TouchableOpacity
            style={bottomSheetStyles.panelButton}
            onPress={takePhotoFromCamera}>
            <Text style={bottomSheetStyles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={bottomSheetStyles.panelButton}
            onPress={choosePhotoFromLibrary}>
            <Text style={bottomSheetStyles.panelButtonTitle}>
                Choose From Library
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={bottomSheetStyles.panelButton}
            onPress={() => bs.current.snapTo(1)}>
            <Text style={bottomSheetStyles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
    </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BottomSheet
                ref={bs}
                snapPoints={[330, -10]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall.current}
            />
            <Animated.View
                style={[
                    { opacity: Animated.add(0.2, Animated.multiply(fall.current, 1)) },
                ]}>
                <ScrollView>
                    <View style={styles.userInfoSection}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                                <View style={{
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                }}>
                                    <ImageBackground
                                        source={userImages[user.username] ? { uri: userImages[user.username] } : imageHolder}
                                        style={{
                                            height: IMAGE_SIZE,
                                            width: IMAGE_SIZE,
                                            justifyContent: 'center',
                                            alignContent: 'center',
                                        }}
                                        imageStyle={{ borderRadius: 100 }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Icon
                                                name="camera"
                                                size={35}
                                                color="#fff"
                                                style={{
                                                    opacity: 0.5,
                                                    borderWidth: 1,
                                                    borderColor: '#fff',
                                                    borderRadius: 10,
                                                }}
                                            />
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <GroupList title="My Info" content={myInfo} value={userInfo} navigate={navigate} icon={true} />
                    <GroupList title="Feedback" content={feedBack} navigate={navigate} icon={true} />
                    {/* <GroupList title="Settings" content={setting} navigate={navigate} icon={true} /> */}
                </ScrollView>
            </Animated.View>
        </SafeAreaView>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        alignItems: 'center',
        margin: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,

    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    photo: {
        height: 150,
        width: 150,
    },
});
export default EditScreen;
