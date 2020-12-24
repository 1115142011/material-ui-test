// import axios from 'axios';


// const env = process.env.NODE_ENV;
// let baseURL;
// if (env === 'development') {
//   baseURL = '/api';
// } else {
//   baseURL = '';
// }
// // 创建axios实例
// const service = axios.create({
//   baseURL: baseURL
// });


// // request拦截器
// service.interceptors.request.use(config => {
//   let token = localStorage.getItem('currentUserToken') || '';
//   config.headers.Authorization = `Bearer ${token}`;
//   config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// // respone拦截器
// service.interceptors.response.use(
//   response => {
//     const status = response.status;
//     // 请求成功 20X都是进入这里
//     if (status === 200) {
//       return Promise.resolve({
//         code: 200,
//         msg: '请求成功',
//         data: response.data
//       });
//     } else if (status === 204) {
//       return Promise.resolve({
//         code: 200,
//         msg: '请求成功',
//         data: response.data
//       });
//     }
//   },
//   error => {
//     let responeData = {};
//     responeData.code = error.response.status;
//     responeData.msg = '请求错误';
//     if (error.response) {
//       let {
//         data
//       } = error.response;
//       if (data.errorCode === '100004') {
//         localStorage.clear('currentUserToken');

//       }
//       if (data.errorMsg) {
//         // 错误消息
//         responeData.msg = data.errorMsg;
//       }
//     }
    
//     return Promise.reject(error);
//   }
// );

// export default service
// ;
export default {}