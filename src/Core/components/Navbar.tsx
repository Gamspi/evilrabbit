import {FC} from "react";
import {Box, AppBar, Toolbar, IconButton, Typography, Button,} from "@mui/material";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import {useNavigate} from "react-router-dom";
import {RouteName} from "../router";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../redux/reducers/auth/action_craetors";
import {useAction} from "../hooks/usaAction";


const Navbar: FC = () => {
    const {isAuth,user} = useTypeSelector(store => store.auth)
    const {logout} = useAction()
    const loginHandler = () => {
    }
    return (
        <header className={'navBar'}>
            <Box sx={{flexGrow: 1}}>
                <AppBar
                    position="static"
                    color='transparent'
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <FingerprintIcon/>
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Evil Rabbit
                        </Typography>
                        {
                            isAuth ?
                                <>
                                    {user.username}
                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </>
                                :
                                <Button onClick={loginHandler} color="inherit">Login</Button>

                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}
export default Navbar