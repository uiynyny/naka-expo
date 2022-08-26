import {SERVER_ROOT} from './urls';

export const getImage = (username) => {
    return fetch(`${SERVER_ROOT}/images/${username}`)
        .then((res) => {
            if (res.ok && res.status === 200) {
                return res.json();
            }
            return null;
        });
};

export const updateImage = (username, imageUrl) => {
    console.log('updateImage: ', username, imageUrl);
    return fetch(`${SERVER_ROOT}/images/${username}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
        body: JSON.stringify({image: imageUrl}),
    });
};

export const getBlurRate = (groupUuid, username) => {
    return fetch(
        `${SERVER_ROOT}/images/blurRate?groupUuid=${groupUuid}&username=${username}`,
    ).then((res) => {
        if (res.status === 200) {
            return res.text();
        }
        return undefined;
    });
};
