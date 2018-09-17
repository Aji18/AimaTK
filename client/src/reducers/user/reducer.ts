import { Reducer } from 'redux';
import { IUserState, EUserActionTypes } from './types';
import { readLocalStorage } from "./actions";

const initialState: IUserState = {
    data: readLocalStorage(),
    loading: false,
    errors : undefined
};

const reducer: Reducer<IUserState> = (state = initialState, action) => {
    switch (action.type) {
        case EUserActionTypes.FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case EUserActionTypes.UPDATE:
        case EUserActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
            };
        case EUserActionTypes.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                errors: action.payload.message,
            };
        default:
            return state;
    }
};
export { reducer as userReducer };