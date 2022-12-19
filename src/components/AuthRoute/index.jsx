import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"

export const AuthRoute = ({ redirect = '/' }) => {
    const { user } = useAuth()
    const { state } = useLocation()
    if (user) return <Navigate to={state?.redirect || redirect} />

    return <Outlet />
}