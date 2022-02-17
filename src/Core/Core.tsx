import React, {FC, useEffect} from 'react';
import './Core.scss';
import AppRouter from "./components/AppRouter";
import {useAction} from "./hooks/usaAction";
import {IUser} from "./models/iUser";

const Core: FC = () => {
    const {setUser,setIsAuth}=useAction()
    useEffect(()=>{
if(localStorage.getItem('auth')){
setUser({username:localStorage.getItem('username'||'')}as IUser)
    setIsAuth(true)
}
    },[])
    return (
        <div className="Core">
            <AppRouter/>
        </div>
    );
}
export default Core;
