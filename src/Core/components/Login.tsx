import {FC} from "react";
import LoginForm from "./LoginForm";

const Login:FC=()=>{
    return(
        <div className='loginPage'>
        <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}
export default Login