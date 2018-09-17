import {IQuestionAnswer} from "../question";

export interface IAnswer {
    id: string,
    ques_id: string,
    user_id: string,
    answer: IQuestionAnswer,
}

export interface IOnLine {
    ques_id: string,
    loading: boolean,
    error?: string,
}

export interface IAnswerState {
    readonly data   : IAnswer[],
    readonly loading: IOnLine[],
}

export enum EAnswerActionTypes {
    FETCH_REQUEST= "@@answer/FETCH_REQUEST",
    FETCH_SUCCESS= "@@answer/FETCH_SUCCESS",
    FETCH_ERROR  = "@@answer/FETCH_ERROR",
    ADD_REQUEST= "@@answer/ADD_REQUEST",
    ADD_SUCCESS= "@@answer/ADD_SUCCESS",
    ADD_ERROR  = "@@answer/ADD_ERROR",
}