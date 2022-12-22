import { AUTHENTICATION_API } from "@/config/api"
import { http } from "@/config/http"

export const authService = {
    login(data) {
        return http.post(`${AUTHENTICATION_API}/login`,data)
    },
    refreshToken(data) {
        return http.post(`${AUTHENTICATION_API}/refresh-token`, data)
    }
}