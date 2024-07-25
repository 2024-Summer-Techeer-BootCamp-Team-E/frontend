import axios from 'axios'
import Cookies from 'js-cookie'

const REFRESH_URL = '/api/v1/accounts/token/'

const instance = axios.create({
  baseURL: '', // Set your base URL here
})

const logout = () => {
  localStorage.removeItem('accessToken')
  Cookies.remove('refreshToken')
  window.location.reload()
}

const getRefreshToken = async (): Promise<string | void> => {
  try {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken) throw new Error('리프래시 토큰이 존재하지 않음')

    const response = await axios.post(REFRESH_URL, { refresh: refreshToken })
    const { access: newAccessToken, refresh: newRefreshToken } = response.data

    if (!newAccessToken) throw new Error('No access token in response')

    localStorage.setItem('accessToken', newAccessToken)
    if (newRefreshToken) {
      Cookies.set('refreshToken', newRefreshToken)
    }

    return newAccessToken
  } catch (error) {
    console.error('토큰 재발급 실패:', error)
    logout()
  }
}

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error),
)
//재발급 해주는 코드.. 근데 뭔 소리여
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    console.log('Interceptor error:', error)
    if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== REFRESH_URL) {
      console.log('오류로 인해 다시 토큰 재발급 진행중')
      originalRequest._retry = true
      const newAccessToken = await getRefreshToken()
      if (newAccessToken) {
        console.log('새로운 엑세스토큰으로 시도중')
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return axios(originalRequest)
      }
    } else {
      console.log('401에러가 아니거나 이미 재시도 됨:', error.response?.status, originalRequest._retry)
    }
    return Promise.reject(error)
  },
)

export default instance
