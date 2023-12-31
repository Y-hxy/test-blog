import axios from "axios";
axios.defaults.timeout = 10000

export const get = (url, params = {}) => {
	return axios.get(
		url, { params }
	).then(res => res.data)
		.catch(error => handleError(error))
}

export const post = (url, data, headers, params = {}) => {
	return axios.post(
		url, data, { headers, params }
	).then(res => res.data)
		.catch(error => handleError(error))
}

// 封装一个统一的处理错误、传递参数和url的get方法
function handleError(error) {
	if (error.response) {
		// 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
		Promise.reject({
			data: error.response.data,
			code: 10000,
			msg: '请求错误'
		})
	} else if (error.request) {
		// 请求已经成功发起，但没有收到响应
		// `error.request` 在浏览器中是 XMLHttpRequest 的实例，
		// 而在node.js中是 http.ClientRequest 的实例
		Promise.reject({
			data: null,
			code: 10001,
			msg: '无响应'
		})
	} else {
		// 发送请求时出了点问题
		Promise.reject({
			data: null,
			code: 10002,
			msg: error.message
		})
	}
}