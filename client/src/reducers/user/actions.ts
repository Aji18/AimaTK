// import community library
import axios from "axios";
import { action } from "typesafe-actions";

// import reducer types
import * as LocalStorage from "../../utils/LocalStorage";
import { IDispatchThunk } from "../../utils/Actioner";
import {EUserActionTypes, IUser, localStorageUser} from "./types";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const isDev = (process.env.NODE_ENV === 'development');
const defaultErrorShow = process.env.REACT_APP_DEFAULT_ERROR_SHOW;

export const fetchRequest = async ( { dispatch, getState } : IDispatchThunk, name: string, nNumber: string) => {
    dispatch( action(EUserActionTypes.FETCH_REQUEST) );

    try {
        if (getState().user.data.name !== name || getState().user.data.nNumber !== nNumber) {
            const res = await axios.get(`${API_ENDPOINT}users/`, {
                params: {
                    name,
                    number: nNumber,
                }
            });
            writeLocalStorage({id: res.data.userID, name, nNumber});
            dispatch( fetchSuccess( { id: res.data.userID, name, nNumber } ) );

            if (isDev) {
                console.log('fetch');
            }
        } else {
            dispatch( fetchSuccess( { id: getState().user.data.id, name, nNumber } ) );
        }
    } catch (e) {
        if (isDev) {
            console.error(e);
        }

        if (e.response && e.response.data && e.response.data.ermsg && e.response.data.ermsg === 'req_param_error') {
            dispatch( fetchError( 'Mohon masukan nama dan nomor dengan benar' ));
        } else {
            dispatch( fetchError( 'Mohon maaf terjadi kesalahan, mohon ulangi beberapa saat lagi atau coba muat ulang laman anda' ));
        }
        setTimeout(() => {
            dispatch( fetchError( '' ) );
        }, defaultErrorShow);
    }
};
export const fetchSuccess = ( data: IUser )     => action(EUserActionTypes.FETCH_SUCCESS, { data });
export const fetchError   = ( message: string ) => action(EUserActionTypes.FETCH_ERROR, { message });

export const resetUser = ({ dispatch } : IDispatchThunk) => {
    const data: IUser = {
        id: '',
        name: '',
        nNumber: '',
    };

    writeLocalStorage(data);

    dispatch( action(EUserActionTypes.UPDATE, { data }) );
};

export const readLocalStorage = () : IUser => {
    if (LocalStorage.isSupported) {
        if (LocalStorage.hasItem(localStorageUser.name) && LocalStorage.hasItem(localStorageUser.nNumber)) {
            return {
                id: localStorage.getItem(localStorageUser.id) as string,
                name: localStorage.getItem(localStorageUser.name) as string,
                nNumber: localStorage.getItem(localStorageUser.nNumber) as string,
            }
        }
    }
    return {
        id : '',
        name: '',
        nNumber: '',
    };
};
const writeLocalStorage = ( { id, name, nNumber }: IUser ): void => {
    if (LocalStorage.isSupported) {
        localStorage.setItem(localStorageUser.id, id);
        localStorage.setItem(localStorageUser.name, name);
        localStorage.setItem(localStorageUser.nNumber, String(nNumber));
    }
};