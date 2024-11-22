import Cookies from 'js-cookie';

// Replace getCookie with js-cookie functions
const getCookie = (name) => Cookies.get(name);

const setAuthInfo = useCallback(({ token, userInfo, expiresAt }) => {
  setAuthState({
    token,
    userInfo,
    expiresAt
  });
  Cookies.set('token', token, { path: '/', secure: true, sameSite: 'Strict' });
  Cookies.set('userInfo', JSON.stringify(userInfo), { path: '/', secure: true, sameSite: 'Strict' });
  Cookies.set('expiresAt', expiresAt, { path: '/', secure: true, sameSite: 'Strict' });
}, []);

