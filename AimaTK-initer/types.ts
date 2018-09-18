export interface IQuestionAnswer {
    answer: string,
    score: number,
}
export interface IQuestion {
    number: number,
    question: string,
    answers: IQuestionAnswer[],
}
export interface IQuestionSubDimension {
    subdimension: number,
    name: string,
    questions: IQuestion[],
}
export interface IQuestionDimension {
    dimension: number,
    name: string,
    subdimensions: IQuestionSubDimension[],
}