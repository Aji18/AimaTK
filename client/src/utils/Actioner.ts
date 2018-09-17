import { IApplicationState } from "../reducers";
import {ThunkDispatch} from "redux-thunk";

export interface IDispatchThunk {
    dispatch: ThunkDispatch<any, any, any>,
    getState: () => IApplicationState,
}
export const actionThunk = ( f: ( thunk: IDispatchThunk, payload?: any ) => void, dispatch?: ThunkDispatch<any, any, any>) => {
    const call = (dispatch: ThunkDispatch<any, any, any>, getState: () => IApplicationState) => { f({ dispatch, getState }); };
    if (dispatch) {
        dispatch(call);
    } else {
        return call;
    }
    return null;
};