import AsyncStorage from '@react-native-async-storage/async-storage';
import bcrypt from 'react-native-bcrypt';
import uuid from 'react-native-uuid';
import {MESSAGE_MAPPING, SEND_TO, SERVER_ROOT} from '../actions/urls';
import {authorizeUser, getUserByEmail} from "../actions/user";

export const encrypt = passwd => {
    return bcrypt.hashSync(passwd, 8);
};
export const comparePass = async (username, password) => {
    let ret = await authorizeUser(username).then(r => r.json());
    return bcrypt.compareSync(password, ret)
};
export const createToken = (phone, un, email) => {
    return String(phone + un + email);
};
export const VerifyToken = (token, user) => {
    if (token === null || user === null)
        return false
    let hash = createToken(user.phone, user.username, user.email)
    return token === hash
};
export const loginAction = (user) => {
    // for loading process save user data and user token to async storage
    const userData = JSON.stringify(user);
    const userToken = createToken(user?.phone, user.username, user?.email);
    AsyncStorage.multiSet([
        ['userToken', userToken],
        ['userData', userData],
    ]).catch((e) => console.warn('ERROR saving ', e));
    return userToken;
};
export const logoutAction = () => {
    AsyncStorage.multiRemove(['userToken', 'userData']).catch((e) =>
        console.error('err in logout: ', e.toString()),
    );
    AsyncStorage.clear();
};
export const sendPreference = (username, state) => {
    fetch(`${SERVER_ROOT}/preferences/${username}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    }).then((res) => {
        if (res.ok) {
            console.debug('sendPreference succeed');
        }
    }).catch((rej) => console.debug('sendPreference error', rej));
};

export const validateCodeToServer = async (email, password) => {
    let user = await getUserByEmail(email).catch((rej) => {
        console.warn('validateCodeToServer: failed to get User' + rej);
        return false;
    });
    let ret = await comparePass(user.username, password);
    if (ret) {
        return user;
    }
    return ret;
};
export const sendMessage = (msg) => {
    // stompClient.publish({
    //     destination: MESSAGE_MAPPING,
    //     body: JSON.stringify(msg),
    //     headers: {groupUuid: msg.groupUuid}
    // });
};
export const getMessages = async (gid, page = 0, size = 100) => {
    return fetch(
        `${SERVER_ROOT}/messages/${gid}?page=${page}&size=${size}`,
    ).then((res) => res.json());
};
export const subscribeToServer = (username, callback) => {
//     if (stompClient && stompClient.isConnected) {
//         stompClient.subscribe(SEND_TO, callback);
//     } else {
//         stompClient = new StompJs.Client({
//             webSocketFactory: () => new SockJS(`${SERVER_ROOT}/chat`),
//             appendMissingNULLonIncoming: true,
//             onConnect: (frame) => {
//                 console.log('onConnect', frame);
//                 stompClient.subscribe(SEND_TO, callback);
//             },
//             onStompError: (rec) => {
//                 console.log('onError:', rec);
//             },
//             debug: (msg) => {
//                 console.log('onDebug:', msg);
//             },
//         });
//         stompClient.activate();
//     }
};
export const unsubscribeToServer = () => {
//     stompClient.subscribe(SEND_TO);
};
export const saveGroupToLocal = async (username, groups) => {
    return AsyncStorage.setItem(`${username}_group`, JSON.stringify(groups));
};
export const saveMessageToLocal = async (username, messages) => {
    return AsyncStorage.setItem(`${username}_message`, JSON.stringify(messages));
};
export const composeMessage = (users, m, imgs) => ({
    _id: uuid.v4(),
    createdAt: new Date(m.timestamp),
    text: m.text,
    user: {
        _id: users.indexOf(m.username),
        name: m.username,
        avatar: imgs ? `data:image/jpeg;base64,${imgs}` : imgs,
    },
});
