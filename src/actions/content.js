import { SERVER_ROOT } from './urls';

export const getContents = async (size: number = 10, page: number = 1) => {
    return fetch(`${SERVER_ROOT}/content?size=${size}&page=${page}`).then(res => {
        if (res.ok) return res.json();
        return [];
    });
};

export const getContentByLocation = async (radius: number, latitude: number, longitude: number, size: number, page: number) => {
    return fetch(`${SERVER_ROOT}/content/location?radius=${radius}&lat=${latitude}&lng=${longitude}&size=${size}&page=${page}`, { cache: 'force-cache' }).then(res => {
        if (res.ok) return res.json();
        return [];
    });
};

export const getContentByUser = async (user: string, size: number, page: number) => {
    return fetch(`${SERVER_ROOT}/content/user/${user}?size=${size}&page=${page}`).then(res => {
        if (res.ok) return res.json();
        return [];
    });
};
export const getContentById = async (id: string) => {
    return fetch(`${SERVER_ROOT}/content/${id}`).then(res => {
        if (res.ok) return res.json();
        return [];
    });
};

export const getCommentById = async (id: string, size: number, page: number) => {
    return fetch(`${SERVER_ROOT}/content/${id}?size=${size}&page=${page}`).then(res => {
        if (res.ok) return res.json();
        return [];
    });
};

export const postCommentTo = async (id: string, data: any) => {
    console.log('create comment', JSON.stringify(data));
    return fetch(`${SERVER_ROOT}/content/${id}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', accept: 'application/json' }
    });
};

export const createContent = async (data: any) => {
    console.log('create content', data);
    return fetch(`${SERVER_ROOT}/content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(data)
    });
};

export const deleteContent = async (id: string) => {
    return fetch(`${SERVER_ROOT}/content/${id}`, { method: 'DELETE', headers: { accept: 'application/json' } });
}

export const uploadImage = async (username, image) => {
    let data = new FormData()
    data.append(`file`, {
        uri: image.path,
        type: image.mime,
        name: image.filename
    });
    return fetch(`${SERVER_ROOT}/s3/${username}`, {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data
    }).then(res => res.ok ? res.json() : null)
}