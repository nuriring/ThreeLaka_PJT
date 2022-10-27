import axios from 'axios';

const customAxios = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:8080/',
  // baseURL: "http://k7e202.p.ssafy.io/",
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
=======
  // baseURL: 'http://localhost:8080/',
  // nginx가 안달려있을 땐 port번호를 적어줘야 제대로감
  baseURL: "http://k7e202.p.ssafy.io:8080/",
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    // 'Access-Control-Allow-Origin': '*',
>>>>>>> a709e47a5de641033f125f2cfd1737fdc69a3380
  },
});

// Interceptors
customAxios.interceptors.request.use(
<<<<<<< HEAD
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
=======
  (config) => {
    const token = getLocalAccessToken();
    console.log('토큰이있나', token);
    if (config.headers && token)
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
>>>>>>> a709e47a5de641033f125f2cfd1737fdc69a3380
    return Promise.reject(error);
  }
);

function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem('accessToken');
  return accessToken;
}

function getLocalRefreshToken() {
  const refreshToken = window.localStorage.getItem('refreshToken');
  return refreshToken;
}

function refreshToken() {
  return customAxios.post('api/v1/user/auth/refresh', {
    refreshToken: getLocalRefreshToken(),
    accessToken: getLocalAccessToken(),
  });
}
// Add a response interceptor
customAxios.interceptors.response.use(
<<<<<<< HEAD
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

=======
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await refreshToken();
          console.log(rs);
          const { accessToken } = rs.data;
          window.localStorage.setItem('accessToken', accessToken);

          console.log(customAxios.defaults.headers);
          //갱신된 토큰이 들어간상태로 바로 요청이 안감
          customAxios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${accessToken}`;
          return customAxios(originalConfig);
        } catch (_error) {
        // 리프레쉬 토큰도 만료됐으니 재로그인하세요
          window.location.href = '/auth/login';

          // if (_error.response && _error.response.data) {
          //   return Promise.reject(_error.response.data);
          // }


          return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);

>>>>>>> a709e47a5de641033f125f2cfd1737fdc69a3380
export default customAxios;
