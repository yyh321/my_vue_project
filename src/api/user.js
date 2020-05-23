import axios from '@/utils/request'
import config from './config/user'

export const register = data => axios.post(config.register, data)

export const login = data => axios.post(config.login, data)

export const validate = () => axios.get(config.validate)
