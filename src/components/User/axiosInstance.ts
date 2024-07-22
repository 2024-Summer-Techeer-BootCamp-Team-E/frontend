//AccessToken 재발급
// 응답 interceptors를 사용하여 토큰 만료시 토큰을 재발급

import axios from 'axios'
import Cookies from 'js-cookie'

const REFRESH_URL = '/api/v1/accounts/token/'

const instance = axios.create({
  baseURL: '',
})

const logout = () => {
  localStorage.removeItem('accessToken')
  Cookies.remove('refreshToken')
  window.location.reload()
}

const getRefreshToken = async (): Promise<string | void> => {
  try {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken) throw new Error('No refresh token')

    const response = await axios.post(REFRESH_URL, { refreshToken })
    const accessToken = response.data.accessToken

    localStorage.setItem('accessToken', accessToken)
    return accessToken
  } catch (e) {
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

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error
    if (response.status !== 401 || config.sent || config.url === REFRESH_URL) {
      return Promise.reject(error)
    }

    config.sent = true
    const accessToken = await getRefreshToken()
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
      return axios(config)
    }
    return Promise.reject(error)
  },
)

export default instance
