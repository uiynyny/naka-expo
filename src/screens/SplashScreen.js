import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Linking,
  Image,
  ImageBackground,
} from 'react-native';
import { CommonStyles } from '../components/styles';

const splash = require('../assets/images/Splash.png');
const logo = require('../assets/images/logo-square.png');

const nextScreen = 'LoginScreen';

const SplashScreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <ImageBackground source={splash} style={styles.background}>
      <StatusBar barStyle="dark-content" />
      <View style={CommonStyles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => navigate(nextScreen)}
            style={styles.button}>
            <Text style={[styles.signuptext]}>Begin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate(nextScreen)}>
            <Text style={styles.signintext}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingVertical: 10,
            paddingHorizontal: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>

          <Text
            style={styles.footerlink}
            onPress={() =>
              Linking.openURL(
                'https://nakaconnect.com/terms-and-condition-naka/',
              )
            }>
            Terms & Conditions
          </Text>
          <Text style={styles.footertext}> and </Text>
          <Text
            style={styles.footerlink}
            onPress={() =>
              Linking.openURL('https://nakaconnect.com/privacy-policy/')
            }>
            Privacy Policy
          </Text>
          <Text style={styles.footertext}>.</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const { height } = Dimensions.get('screen');
const height_logo = height * 0.65;

const styles = StyleSheet.create({
  background: {
    margin: -20,
    flex: 1,
  },
  container: {
    flex: 0.9,
  },
  logo: {
    height: height_logo,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    width: 200,
  },
  signuptext: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#726E6E',
    margin: 5,
  },
  signintext: {
    margin: 5,
    fontSize: 62,
    color: '#726E6E',
  },
  footer: {
    // flex: .1,
    alignItems: 'center',
    marginBottom: 50,
  },
  footertext: {
    // fontFamily: 'Hiragino Sans',
    color: '#726E6E',
    fontSize: 12,
  },
  footerlink: {
    textDecorationLine: 'underline',
    // fontFamily: 'Hiragino Sans',
    fontSize: 12,
    color: '#726E6E',
  },
});

export default SplashScreen;
