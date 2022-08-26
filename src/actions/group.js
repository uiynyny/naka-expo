import { SERVER_ROOT } from './urls';

/**
 * {id: string,
 *  name: string,
 *  descrition: string,
 *  users: list}
 */
export const getGroups = async (username) => {
  return fetch(`${SERVER_ROOT}/groups/user/${username}`).then(res => {
    if (res.ok && res.status === 200) return res.json();
    return [];
  });
};

export const getGroup = async (username) => {
  return fetch(
    `${SERVER_ROOT}/groups?username=${encodeURIComponent(username)}`,
  );
};

export const getGroupById = async (gid) => {
  console.log('getGroupById:', gid);
  return fetch(`${SERVER_ROOT}/groups/${gid}`).then(res => {
    if (res.status === 200) return res.json();
    return null;
  });
};

export const createGroup = async (group) => {
  return fetch(`${SERVER_ROOT}/groups`, {
    method: 'POST',
    body: JSON.stringify(group),
  });
};

export const updateGroup = (group_info) => {
  console.log('update group', JSON.stringify(group_info));
  return fetch(`${SERVER_ROOT}/groups`, {
    method: 'PUT',
    body: JSON.stringify(group_info),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.text());
};

export const deleteGroup = (groupUuid) => {
  console.log('delete group', groupUuid);
  return fetch(`${SERVER_ROOT}/groups/${groupUuid}`, {
    method: 'DELETE'
  }).then(res => res.text());
};
