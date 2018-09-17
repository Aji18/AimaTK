export interface IInstituteIdentity {
    name: string,
    status: string,
    statisticNumber: string,
    NPSNNumber: string,
    establishedDate: string,
    address: string,
    emailOrWeb: string,
    accreditation: string,
    qualityAssurance: string
}

export interface IInstituteState {
    readonly data   : IInstituteIdentity,
    readonly loading: boolean,
    readonly errors?: string,
}

export const enum EInstituteActionTypes {
    ADD_REQUEST_INSTITUTE = '@@institute/ADD_REQUEST',
    ADD_SUCCESS_INSTITUTE = '@@institute/ADD_SUCCESS',
    ADD_ERROR_INSTITUTE = '@@institute/ADD_ERROR',
    FETCH_REQUEST_INSTITUTE = '@@institute/FETCH_REQUEST',
    FETCH_SUCCESS_INSTITUTE = '@@institute/FETCH_SUCCESS',
    FETCH_ERROR_INSTITUTE = '@@institute/FETCH_ERROR',
    UPDATE = '@@institute/UPDATE',
}