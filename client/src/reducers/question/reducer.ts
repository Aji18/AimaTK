import { Reducer } from 'redux';
import { IQuestionState, EQuestionActionTypes } from './types';

const initialState: IQuestionState = {
    data: [],
    loading: false,
    errors : undefined
};

const reducer: Reducer<IQuestionState> = (state = initialState, action) => {
    switch (action.type) {
        case EQuestionActionTypes.FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case EQuestionActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
            };
        case EQuestionActionTypes.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                errors: action.payload.message,
            };
        default:
            return state;
    }
};
export { reducer as questionReducer };