import {useRoutes} from 'react-router-dom'
import {privateRouts, publicRouts} from '../router'
import Navbar from "./Navbar";
import {useTypeSelector} from "../hooks/useTypeSelector";

const AppRouter = () => {
    const {isAuth} = useTypeSelector(store => store.auth)
    const router = useRoutes(isAuth ? privateRouts : publicRouts)
    return (
        <>
            <Navbar/>
            {router}
                </>
        //     isAuth ?
        //         <Routes>
        //             {privateRouts.map(route=><Route path={route.path} element={route.element} key={route.path}/>)}
        //             <Route path={'/'} element={<Navigate to={RouteName.LOGIN}/>}/>
        //             {/*<Navigate to={RouteName.LOGIN}/>*/}
        //         </Routes>
        //         :
        //         <Routes>
        //             {publicRouts.map(route=><Route path={route.path} element={route.element} key={route.path}/>)}
        //             {/*<Navigate to={RouteName.MAIN} replace/>*/}
        //         </Routes>
    )
}
export default AppRouter