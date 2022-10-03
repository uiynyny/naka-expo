import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ListItem } from 'react-native-elements';
import ExPP from '../../assets/images/logo-square.png';
import ExCP from '../../assets/images/Splash-old.png';

const NotifScreen = () => {
  return (
    <View style={{ flex: 1, marginVertical: 10 }}>
        <View style={{ marginHorizontal: 10 }}><Text style={{ fontWeight: '100' }}>This month</Text></View>
            <TouchableOpacity>
                <ListItem containerStyle={{ borderRadius: 10, marginHorizontal: 5, marginVertical: 3, backgroundColor: 'transparent'}}>
                    <View style={styles.imgCropper}>
                        <Image source={ExPP}
                        style={styles.avatar}/>
                    </View>      
                        <ListItem.Content>
                            <ListItem.Title style={styles.username}>USER1</ListItem.Title>
                            <ListItem.Subtitle style={styles.subtitle}>liked your post</ListItem.Subtitle>
                        </ListItem.Content>
                            <Image source={ExCP} style={{height: 50, width: 50 , resizeMode:'cover'}}/>
                </ListItem>
            </TouchableOpacity>
            <View>
                <ListItem containerStyle={{ borderRadius: 10, marginHorizontal: 5, marginVertical: 3, backgroundColor: 'transparent'}}>
                    <View style={styles.imgCropper}>
                        <Image source={ExPP}
                        style={styles.avatar}/>
                    </View>
                    <ListItem.Content>
                        <ListItem.Title style={styles.username}>USER2</ListItem.Title>
                        <ListItem.Subtitle style={styles.subtitle}>commented your post</ListItem.Subtitle>
                    </ListItem.Content>
                        <Image source={ExCP} style={{height: 50, width: 50 , resizeMode:'cover'}}/>
                </ListItem>
            </View>
    </View>
  )
}

export default NotifScreen

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
      },
      imgCropper:{
        margin: 2,
        marginLeft: 0,
        borderRadius: 50,
        width: 30,
        height: 30,
        overflow: 'hidden',
      },
      username:{
        fontSize: 12,
        fontWeight: 'bold',
      },
      subtitle:{
        marginTop: 3,
        fontSize: 12,
      }
})