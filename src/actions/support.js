import { SERVER_ROOT } from './urls';

export const createSupportRequest = (payload) => {

  console.log('support Request', payload);
  return fetch(`${SERVER_ROOT}/support`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  }).then(res => res.text());
};


export async function createReport(id, username, report) {
  console.log(id,username,report)
}