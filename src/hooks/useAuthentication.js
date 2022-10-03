import React from 'react';
import { getAuth, onAuthStateChanged, PhoneAuthProvider, signInWithCredential, signInWithCustomToken } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN, LOGOUT } from '../redux/actionTypes';

const auth = getAuth()
const phoneAuthProvider = new PhoneAuthProvider(auth)

export function useAuthentication() {
  const dispatch = useDispatch()
  const credential = useSelector(s => s.user)

  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      console.log('auth', user)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch({ type: LOGIN, payload: { ...user, token } });
      } else {
        // User is signed out
        console.log("logout")
        dispatch({ type: LOGOUT })
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return [credential];
}

export async function signInWithPhone(phoneNumber, recaptcha) {
  auth.settings.appVerificationDisabledForTesting = true;
  try {
    return phoneAuthProvider.verifyPhoneNumber(phoneNumber, recaptcha)
  } catch (err) {
    console.error('signin firebase failed', err);
  }
}

export async function signInCreds(credential) {
  return signInWithCredential(auth, credential)
}