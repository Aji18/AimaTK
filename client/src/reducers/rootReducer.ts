import {combineReducers} from "redux";

// import reducers
import { IUserState, userReducer } from './user';
import { IInstituteState, instituteReducer } from "./institute";
import { IQuestionState, questionReducer } from "./question";
import {IAnswerState} from "./answer";
import {answerReducer} from "./answer/reducer";

export interface IApplicationState {
    user: IUserState,
    institute: IInstituteState,
    question: IQuestionState,
    answer: IAnswerState
}

export default combineReducers<IApplicationState>({
    user: userReducer,
    institute: instituteReducer,
    question: questionReducer,
    answer: answerReducer,
})