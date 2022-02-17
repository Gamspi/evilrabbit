import {AuthAction, authState, AuthActionEnum} from "./Types";
import {IUser} from "../../../models/iUser";

const initialState: authState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {} as IUser
}

const authReducer = (state = initialState, action: AuthAction): authState => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload}
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload}

        default:
            return state
    }
}
export default authReducer