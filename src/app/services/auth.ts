import API from 'app/utils/api';

export function signUp(payload: { username: string; password: string }) {
  let url = '/auth/createUser';
  return API.post(url, payload, null, false);
}

export function login(payload: { username: string; password: string }) {
  let url = '/auth/login';
  return API.post(url, payload, null, false).then(result => result.data);
}

// export function refreshToken() {
//   let url = '/v2/users/authentication';
//   return API.get(url).then(result => result.data);
// }
