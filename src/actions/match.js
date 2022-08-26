import { SERVER_ROOT } from './urls';

export const getMatchedUsernames = username => {
  console.log('get matched user for', username);
  return fetch(`${SERVER_ROOT}/matches/usernames/${username}`).then(res => res.ok ? res.json() : []);
};

export const getMatch = async (username) => {
  return fetch(`${SERVER_ROOT}/matches/user/${username}`);
};