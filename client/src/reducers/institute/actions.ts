import axios from "axios";
import {action} from "typesafe-actions";

import {IDispatchThunk} from "../../utils/Actioner";
import { IInstituteIdentity, EInstituteActionTypes } from "./types";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const isDev = (process.env.NODE_ENV === 'development');
const defaultErrorShow = process.env.REACT_APP_DEFAULT_ERROR_SHOW;

export const addRequestInstitute = async ({dispatch, getState}: IDispatchThunk, instituteIdentity: IInstituteIdentity) => {
    dispatch( action( EInstituteActionTypes.ADD_REQUEST_INSTITUTE ) );

    try {
        await axios.get( `${API_ENDPOINT}answers/${getState().user.data.id}/add/institute/`, {
            params: {
                answer: JSON.stringify( instituteIdentity ),
            }
        });

        dispatch( addSuccessInstitute( instituteIdentity ) );
    } catch (e) {
        if (isDev) {
            console.error(e);
        }

        if (e.response && e.response.data && e.response.data.ermsg && e.response.data.ermsg === 'req_param_error') {
            dispatch( addErrorInstitute( 'Mohon masukan data dengan benar' ));
        } else {
            dispatch( addErrorInstitute( 'Mohon maaf terjadi kesalahan, mohon ulangi beberapa saat lagi atau coba muat ulang laman anda' ));
        }
        setTimeout(() => {
            dispatch( addErrorInstitute( '' ) );
        }, defaultErrorShow)
    }
};
export const addSuccessInstitute = ( data: IInstituteIdentity )     => action(EInstituteActionTypes.ADD_SUCCESS_INSTITUTE, { data });
export const addErrorInstitute   = ( message: string ) => action(EInstituteActionTypes.ADD_ERROR_INSTITUTE, { message });

const nullIStateL = (): IInstituteIdentity => ({
    name: '',
    status: '',
    statisticNumber: '',
    NPSNNumber: '',
    establishedDate: '',
    address: '',
    emailOrWeb: '',
    accreditation: '',
    qualityAssurance: '',
});
export const fetchRequest = async({dispatch, getState}: IDispatchThunk) => {
    dispatch( action( EInstituteActionTypes.FETCH_REQUEST_INSTITUTE ) );

    try {
        const res = await axios.get( `${API_ENDPOINT}answers/${getState().user.data.id}/all/institute/`);

        if (res.data) {
            const data = JSON.parse(res.data.answer) as IInstituteIdentity;
            dispatch(fetchSuccess(data));
        } else {
            dispatch(fetchSuccess( nullIStateL() ))
        }
    } catch (e) {
        if (isDev) {
            console.error(e);
        }
        dispatch( fetchError( 'Mohon maaf terjadi kesalahan, mohon ulangi beberapa saat lagi atau coba muat ulang laman anda' ));
        setTimeout(() => {
            dispatch( fetchError( '' ) );
        }, defaultErrorShow)
    }
};
export const fetchSuccess = ( data: IInstituteIdentity )     => action(EInstituteActionTypes.FETCH_SUCCESS_INSTITUTE, { data });
export const fetchError   = ( message: string ) => action(EInstituteActionTypes.FETCH_ERROR_INSTITUTE, { message });

export const resetInstitute = ({ dispatch } : IDispatchThunk) => {
    dispatch( action(EInstituteActionTypes.UPDATE, { data: nullIStateL() }) );
};