import React from 'react';
import { getAuth, onAuthStateChanged, User, signInWithPhoneNumber, PhoneAuthProvider, RecaptchaVerifier } from 'firebase/auth';
import { FirebaseRecaptchaVerifier } from 'expo-firebase-recaptcha'
import { useSelector } from 'react-redux';

const auth = getAuth();
const applicationVerifier = new FirebaseRecaptchaVerifier('naka');

export function useAuthentication() {
  const [user, setUser] = React.useState();
  const credential = useSelector(s => s.user)

  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return [user];
}

export async function signInWithPhone(phoneNumber) {
  auth.settings.appVerificationDisabledForTesting = false;
  try {
    
    return signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
  } catch (err) {
    console.error('signin firebase failed', err);
  }
}