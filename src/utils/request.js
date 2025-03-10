import axios from 'axios';

// 创建一个axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL, // 使用环境变量作为 baseURL
  timeout: 5000, // 设置请求超时时间
  headers: {
    'Content-Type': 'application/json' // 设置请求头为 JSON 格式
  }
});

// 请求模板函数
export function createRequestTemplate(requestBody) {
  const urlParams = new URLSearchParams(window.location.search);
  const openId = urlParams.get('openId');

  return {
    requestPlatFrom: 'pwdkeeper.xin_web',
    requestId: '19ae7c84ca623695',
    userId: openId,
    timestamp: Date.now().toString(),
    requestBody: requestBody
  };
}

// 封装请求方法
export function sendRequest(url, data) {
  const requestData = createRequestTemplate(data);
  return service.post(url, requestData)
    .then(response => {
      // 检查后端返回的标准格式
      if (response.data.code === 0) {
        return response.data.data; // 返回实际数据
      } else {
        // 处理失败情况
        throw new Error(response.data.msg || '请求失败');
      }
    })
    .catch(error => {
      // 处理错误
      throw error;
    });
}

export default service;