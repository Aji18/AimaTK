export interface IQuestionAnswer {
    answer: string,
    score: number,
}
export interface IQuestion {
    id: string,
    number: number,
    question: string,
    answers: IQuestionAnswer[],
}
export interface IQuestionSubDimension {
    id: string,
    subdimension: number,
    name: string,
    questions: IQuestion[],
}
export interface IQuestionDimension {
    id: string,
    dimension: number,
    name: string,
    subdimensions: IQuestionSubDimension[],
}

export interface IQuestionState {
    readonly data   : IQuestionDimension[],
    readonly loading: boolean,
    readonly errors?: string,
}

export enum EQuestionActionTypes {
    FETCH_REQUEST= "@@question/FETCH_REQUEST",
    FETCH_SUCCESS= "@@question/FETCH_SUCCESS",
    FETCH_ERROR  = "@@question/FETCH_ERROR",
}