import {FC, FormEvent, useState} from "react";
import {Box, Card, TextField, Button} from "@mui/material";
import {useAction} from "../hooks/usaAction";


const LoginForm: FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login}=useAction()
    const submit = (event: FormEvent) => {
        event.preventDefault()
        login(username, password)
    }

    return (
        <div className='login'>
            <Card variant="outlined">
                <Box
                    className="login__form"
                    component="form"
                    onSubmit={submit}>

                    <Box
                        className="login__inputs"
                        component='div'
                    >
                        <TextField
                            color='error'
                            id="outlined-basic"
                            label="UserName"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                        <TextField
                            color='error'
                            type='password'
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                    </Box>
                    <Button type='submit' color='error' variant="contained">Login</Button>
                </Box>
            </Card>
        </div>
    )
}
export default LoginForm