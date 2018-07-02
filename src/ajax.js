const LOGIN_URL = 'https://master-sellermobile.gitview.net/api/v1.1.x/alexa/amz/login';

export function signIn({ username, password }) {
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: username,
      password,
    }),
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    return error;
  });
}