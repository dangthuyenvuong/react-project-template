import { useSelector } from "react-redux"

export const useAuth = () => useSelector(store => store.auth)