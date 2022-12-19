import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages";
import { Page404 } from "@/pages/404";

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