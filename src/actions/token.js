import { SERVER_ROOT, } from "./urls";

export const saveAPNToken = async (username, token) => {
    let content = { username, token }
    // console.log('save tokens', JSON.stringify(content));
    return fetch(`${SERVER_ROOT}/APNTokens`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(content)
    });
}

export const deleteAPNToken = async(username)=>{
    // console.log("delete token ",username);
    return fetch(`${SERVER_ROOT}/APNTokens/${username}`,{
        method:"DELETE",
        headers:{
            Accept: 'application/json',
            'Content-type':'application/json'
        }
    })
}