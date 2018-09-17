// import community library
import axios from "axios";
import { action } from "typesafe-actions";

// import reducer types
import {IDispatchThunk} from "../../utils/Actioner";
import {EAnswerActionTypes, IAnswer} from "./types";
import {IQuestionAnswer} from "../question";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const isDev = (process.env.NODE_ENV === 'development');
const defaultErrorShow = process.env.REACT_APP_DEFAULT_ERROR_SHOW;

export interface IAnswerAdd {
    ques_id: string,
    answer: IQuestionAnswer,
}

export const addRequest = async ( { dispatch, getState } : IDispatchThunk, answer: IAnswerAdd ) => {
    dispatch( action(EAnswerActionTypes.ADD_REQUEST, { ques_id: answer.ques_id }) );

    try {
        const res = await axios.get(`${API_ENDPOINT}answers/${getState().user.data.id}/add/`, {
            params: {
                quid: answer.ques_id,
                answer: JSON.stringify(answer.answer),
            }
        });
        dispatch( addSuccess( res.data.answerID, getState().user.data.id, answer ) );
    } catch (e) {
        if (isDev) {
            console.error(e);
        }

        dispatch( addError( answer.ques_id, 'Mohon maaf terjadi kesalahan, mohon ulangi beberapa saat lagi atau coba muat ulang laman anda' ));
        setTimeout(() => {
            dispatch( addError( answer.ques_id, '' ) );
        }, defaultErrorShow)
    }
};
export const addSuccess = ( id: string, userID: string, data: IAnswerAdd )   => action(EAnswerActionTypes.ADD_SUCCESS, { id, user_id: userID, data });
export const addError   = ( quesID: string, message: string ) => action(EAnswerActionTypes.ADD_ERROR, { ques_id: quesID, message });

export const fetchRequest = async ( { dispatch, getState } : IDispatchThunk ) => {
    dispatch( action(EAnswerActionTypes.FETCH_REQUEST, { ques_id: 'all' }) );

    try {
        const res = await axios.get(`${API_ENDPOINT}answers/${getState().user.data.id}/all/`);
        res.data.forEach((answer: IAnswer) => {
            answer.answer = JSON.parse(answer.answer as any)
        });
        dispatch( fetchSuccess( res.data ) );
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
export const fetchSuccess = ( data: IAnswer[] ) => action(EAnswerActionTypes.FETCH_SUCCESS, { data });
export const fetchError   = ( message: string ) => action(EAnswerActionTypes.FETCH_ERROR, { ques_id: 'all', message });