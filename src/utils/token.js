const TOKEN_KEY = 'token'
const USER_KEY = 'user'
export const setToken = (data) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}
export const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY))
}
export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}


export const setUser = (data) => {
    localStorage.setItem(USER_KEY, JSON.stringify(data))
}
export const getUser = () => {
    return JSON.parse(localStorage.getItem(USER_KEY)) 
}
export const clearUser = () => {
    localStorage.removeItem(USER_KEY)
}