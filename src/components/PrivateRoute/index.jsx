import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"

export const PrivateRoute = ({ redirect = '/' }) => {
    const { user } = useAuth()

    if (!user) return <Navigate to={redirect}/>

    return <Outlet />
}