import AsyncStorage from "@react-native-async-storage/async-storage";
import {SERVER_ROOT} from './urls';

export const createUserWaitList = waitList => {
    console.log('create waitList user: ', waitList);
    return fetch(`${SERVER_ROOT}/user/waitList`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(waitList)
    });
};

export const findUserWaitList = (type, value) => {
    console.log('find waitlist user:', type, value);
    return fetch(`${SERVER_ROOT}/user/waitList?${type}=${value}`).then(r => r.ok ? r.json() : null);
};

export const authorizeUser = async username => {
    return fetch(`${SERVER_ROOT}/user/authorization?username=${username}`);
};

export const storeUser = user => {
    console.debug('StoreUser: ', user.username);
    AsyncStorage.setItem('userData', JSON.stringify(user))
        .catch((rej) => console.error('save user locally failed', rej));
};

export const checkUser = async (type, value) => {
    return fetch(`${SERVER_ROOT}/user/existing?${type}=${value}`)
        .then(res => res.json())
        .catch(rej => console.warn('login failed ' + rej));
};

export const getUserByPhone = (phone) => {
    return fetch(`${SERVER_ROOT}/user?phone=${phone}`).then(r => r.ok ? r.json() : null);
};

export const getUserByEmail = (email) => {
    return fetch(`${SERVER_ROOT}/user?email=${email}`).then(r => r.ok ? r.json() : null);
};

export const getUserByUsername = (username) => {
    return fetch(`${SERVER_ROOT}/user?username=${username}`).then(r => r.ok ? r.json() : null);
}

export const getUserByName = (username) => {
    return fetch(`${SERVER_ROOT}/user/${username}`).then(r => r.ok ? r.json() : null);
};

export const resetPassword = (email) => {
    console.log('reset', email)
    return fetch(`${SERVER_ROOT}/user/forget/${email}`).then(r => r.ok ? r.json() : null);
}

export const createUser = async user => {
    trimUser(user)
    return fetch(`${SERVER_ROOT}/user`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
};

export const updateUser = async user => {
    user = trimUser(user)
    console.log(JSON.stringify(user))
    return fetch(`${SERVER_ROOT}/user`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
};

function trimUser(user) {
    delete user.isLoggedIn
    delete user.token
    delete user.program
    return user
}