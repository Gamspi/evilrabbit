import {Navigate} from 'react-router-dom'
import Login from "../components/Login";
import Main from "../components/Main";

export interface IRoute {
    path: string,
    element: any
}

enum RouteName {
    LOGIN = '/login',
    MAIN = '/',
    ANY = '*'
}


export const publicRouts: IRoute[] = [
    {
        path: RouteName.LOGIN,
        element: <Login/>,
    },
    {
        path: RouteName.ANY,
        element: <Navigate to={RouteName.LOGIN}/>,
    }

]

export const privateRouts: IRoute[] = [
    {
        path: RouteName.MAIN,
        element: <Main/>,
    },
    {
        path: RouteName.ANY,
        element: <Navigate to={RouteName.MAIN}/>,
    }
]
