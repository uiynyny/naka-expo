import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View, } from 'react-native';
import { getCommentById, postCommentTo } from '../../actions/content';
import { Avatar, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';

const CommentScreen = (props) => {
  const user = useSelector(s => s.user);
  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const userImg = useSelector(s => s.userImageCache);

  const postComment = () => {
    const newComment = {
      username: user.username,
      content: newCommentText,
      like: 0,
      reported: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setNewCommentText('');
    postCommentTo(props.postId, newComment);
    setComments(prevState => [...prevState, newComment]);
  };

  const likeComment = (likedComment) => {
    if (likedComment) {
      console.log('disliked comment');
    } else {
      console.log('liked comment');
    }
  };

  function extractUserName() {
    return props.userName;
  }

  function likesExtractor(item) {
    return item.likes.map((like) => {
      return {
        image: like.userImage,
        name: like.userName,
        user_id: like.user_id,
        tap: (username) => {
          console.log('Taped: ' + username);
        },
      };
    });
  }

  useEffect(() => {
    async function fetchData() {
      let comment = await getCommentById(props.postId, '100', '1');
      setComments(comment.items === undefined ? [] : comment.items);
    }

    fetchData();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.buttonWrapper} behavior={'padding'} keyboardVerticalOffset={20}>
      <ScrollView style={styles.scrollView}>
        {comments.map((item, index) => {
          return (
            <ListItem style={styles.button} key={index} bottomDivider>
              <Avatar containerStyle={{ backgroundColor: '#8d8c8c' }} source={{ uri: userImg[item.username] }} title={item.username[0]} rounded={true} onPress={()=>props.onAvatarPress(item)} />
              <ListItem.Content>
                <ListItem.Title>{item.username}</ListItem.Title>
                <ListItem.Subtitle>{item.content}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </ScrollView>
      <View style={styles.textWrapper}>
        <TextInput
          placeholder={'Comment'}
          value={newCommentText}
          placeholderTextColor={'#bfbfbf'}
          placeholderStyle={styles.placeholderStyle}
          style={styles.textInputStyle}
          onChangeText={setNewCommentText}
          onSubmitEditing={postComment}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  Modal: {
    alignItems: 'flex-start',
    // alignSelf: 'center',
    height: '70%',
    width: '100%',
    top: '40%',
    left: 0,
    right: 0,
    // bottom: 20,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignContent: 'space-between',
  },
  placeholderStyle: {
    width: '100%',
  },
  scrollView: {
    // position: 'relative',
    // bottom: 100,
    textAlign: 'left',
    top: 10,
    left: 0,
    right: 0,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
  },
  button: {
    // height: '70%',
    width: '100%',
    margin: 5,
    top: '10%',
    // marginLeft: 0,
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    height: '70%',
    width: '100%',
    top: '10%',
    marginLeft: 0,
    justifyContent: 'space-between',
  },
  textInputStyle: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderColor: '#6f6f6f',
    borderWidth: 0.5,
    backgroundColor: '#f5f5f5',
  },
  textWrapper: {
    flexDirection: 'row',
  },
});
export default CommentScreen;
