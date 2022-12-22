import { lazy } from "react";

const Home = lazy(() => import("@/pages"))
const Page404 = lazy(() => import("@/pages/404"))
const MainLayout = lazy(() => import("@/layouts/MainLayout"))

export const routers = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '*',
                element: <Page404 />
            }
        ]
    }
]