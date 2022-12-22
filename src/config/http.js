import { authService } from "@/services/auth"
import axios from "axios"
import { getToken, setToken } from "../utils/token"


export const http = axios.create()
http.interceptors.response.use((res) => {
    return res.data
}, async (error) => {

    try {
        if (error.response.status === 403 && error.response.data.error_code === "TOKEN_EXPIRED") {
            // refresh token
            const token = getToken()
            const res = await authService.refreshToken({
                refreshToken: token.refreshToken
            })
            // gắn token vào localStorage
            setToken(res.data)

            // Thực thi lại api bị lỗi
            return http(error.config)



        }
    } catch (err) {

    }
    throw error
})


http.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = `Bearer ${token.accessToken}`
    }
    return config
})