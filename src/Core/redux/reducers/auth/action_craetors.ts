import {IUser} from "../../../models/iUser";
import {AuthActionEnum, setAuthAction, setErrorAction, setIsLoadingAction, setUserAction} from "./Types";
import {appDispatch} from "../../store";
import axios from "axios";

export const AuthActionCreators = {
    setUser: (user: IUser): setUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): setAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setError: (error: string): setErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (isLoading: boolean): setIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload: isLoading
    }),
    login: (username: string, password: string) => async (dispatch: appDispatch) => {
        try {
            setTimeout(async () => {
                dispatch(AuthActionCreators.setIsLoading(true))
                const response = await axios.get<IUser[]>('./Users.json')
                const mockUsers = response.data.find(user => user.username === username && user.password === password)
                if (mockUsers) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUsers.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUsers))
                }
            }, 1000)


        } catch (e) {
            dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))

        }
        dispatch(AuthActionCreators.setIsLoading(false))

    },
    logout: () => async (dispatch: appDispatch) => {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setIsAuth(false))
            dispatch(AuthActionCreators.setUser({} as IUser))

    }
}

