import { SERVER_ROOT } from './urls';

export const getNotification = async (username: string, size: number = 10, page: number = 1) => {
    return fetch(`${SERVER_ROOT}/notification?username=${username}&size=${size}&page=${page}`).then(res => {
        if (res.ok) return res.json();
        return [];
    });
};