import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

import CommentScreen from './Comments';
import { useSelector } from 'react-redux';
import { ExtraOptions } from '../../components/BottomMoreOption';

const imageHolder = require('../../assets/images/image_ONBt.png');

const CustomCallout = (props) => {
  const contents = props.content;
  const userImg = useSelector(s => s.userImageCache);
  const [postId, setPostId] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showmodal, setShowModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [postUser,setPostUser] = useState(null);

  const onCommentClick = (index) => {
    setShowModal(!showmodal);
    setPostId(index);
  };

  const toggleModal = () => setShowModal(!showmodal)
  const toggleOption = () => setShowOptions(!showOptions)

  const onSharePress = ({username,id}) => {
    toggleOption();
    setPostUser(username)
    setPostId(id);
  };

  const onAvatarPress = user => {
    props.navigation.navigate('ViewScreen', { username: user.username });
    props.toggle();
  };

  return (<View style={styles.page}>
    <ScrollView contentContainerStyle={styles.Modal} style={{ borderRadius: 20 }}>
      {contents.map((value, index) => (
        <View key={index} style={{ flex: 1, justifyContent: 'center', borderRadius: 18 }}>
          {value.imageUrls.length > 0 ?
            <Image source={{ uri: value.imageUrls[0] }} style={styles.image} /> :
            <ImageBackground source={{}} style={styles.image}>
              <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text
                  style={{ fontFamily: 'Baskerville-Italic', fontSize: 26 }}>{value.content}</Text>
              </View>
            </ImageBackground>}
          <View style={{ flexDirection: 'row', flex: 0.5, margin: 10 }}>
            <TouchableOpacity style={{ flexDirection: 'row', flex: 1, }}
              onPress={() => onAvatarPress(value)}>
              <View style={styles.imgCropper}>
                <Image source={userImg[value.username] ? { uri: userImg[value.username] } : imageHolder}
                    style={styles.avatar}/>
              </View>
              <Text style={{ flex: 3, margin: 5 }}>{value.username}</Text>
            </TouchableOpacity>
            <View style={styles.button}>
              {/* <TouchableOpacity
                style={{ margin: 3 }}
                onPress={() => setLiked((isLiked) => !isLiked)}>
                <Icon
                  name={liked ? 'heart' : 'heart-outline'}
                  size={18}
                  color={liked ? 'red' : 'black'}
                  theme="outlined" />
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => onCommentClick(value._id.$oid)} style={{ margin: 2 }}>
                <Icon name="chatbubble-outline" size={18} />
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 3 }} onPress={() => onSharePress({"username":value.username,"id":value._id.$oid})}>
                <Icon name="arrow-redo-outline" size={18} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.description}>
            <Text>{value.content}</Text>
          </View>
        </View>
      ))}
      <View>
        <Modal isVisible={showmodal} onBackdropPress={toggleModal}>
          <CommentScreen postId={postId} onAvatarPress={onAvatarPress} />
        </Modal>
        <ExtraOptions visible={showOptions} setVisible={setShowOptions} username={postUser} postId={postId}/>
      </View>
    </ScrollView>
  </View>);
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginVertical: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#fbfbff',
    borderRadius: 20,
    alignContent: 'space-between',
  },
  Modal: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  commentModalWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: '50%',
  },
  commentModal: {
    backgroundColor: '#FFFFFF',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
    width: '100%',
    height: '100%',
    aspectRatio: 0.5, // Your aspect ratio
    borderRadius: 12,
    borderColor: '#FF0000',
    backgroundColor: '#f8f9fa'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  imgCropper:{
    margin: 2,
    marginLeft: 10,
    borderRadius: 50,
    width: 30,
    height: 30,
    overflow: 'hidden',
  },
  description: {
    alignContent: 'center',
    margin: 20,
  },
  imgContainer: {
    flexDirection: 'row',
  },
  name: {
    left: 45,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'center',
    // backgroundColor: '#fff',
    // borderRadius: 0,
    // borderColor: '#ccc',
    // borderWidth: 0.5,
    // padding: 15,
    // width: '100%',
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default CustomCallout;
