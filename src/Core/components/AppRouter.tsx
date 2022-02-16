import {useRoutes} from 'react-router-dom'
import {privateRouts, publicRouts} from '../router'

const AppRouter = () => {
    const auth = false
    const router = useRoutes(auth ? privateRouts : publicRouts)
    return (
        <>
            {router}
        </>
        //     auth ?
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