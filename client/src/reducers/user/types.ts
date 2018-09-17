export interface IUser {
    id      : string,
    name    : string,
    nNumber : string,
}

export interface IUserState {
    readonly data   : IUser,
    readonly loading: boolean,
    readonly errors?: string,
}

export const enum EUserActionTypes {
    FETCH_REQUEST = '@@user/FETCH_REQUEST',
    FETCH_SUCCESS = '@@user/FETCH_SUCCESS',
    FETCH_ERROR   = '@@user/FETCH_ERROR',
    UPDATE        = '@@user/UPDATE',
}

export const localStorageUser = {
    id: '@@user/id',
    name: '@@user/name',
    nNumber: '@@user/nName',
};