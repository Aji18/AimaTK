// import community library
import axios from "axios";
import { action } from "typesafe-actions";

// import reducer types
import { IDispatchThunk } from "../../utils/Actioner";
import {EQuestionActionTypes, IQuestionDimension} from "./types";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const isDev = (process.env.NODE_ENV === 'development');
const defaultErrorShow = process.env.REACT_APP_DEFAULT_ERROR_SHOW;

export const fetchRequest = async ( { dispatch, getState } : IDispatchThunk) => {
    dispatch( action(EQuestionActionTypes.FETCH_REQUEST) );

    try {
        const res = await axios.get(`${API_ENDPOINT}questions/`);
        dispatch( fetchSuccess( res.data as any ) );
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
        }, defaultErrorShow)
    }
};
export const fetchSuccess = ( data: IQuestionDimension[] ) => action(EQuestionActionTypes.FETCH_SUCCESS, { data });
export const fetchError   = ( message: string )            => action(EQuestionActionTypes.FETCH_ERROR, { message });