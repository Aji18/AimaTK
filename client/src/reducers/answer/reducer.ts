import { Reducer } from 'redux';
import { IAnswerState, EAnswerActionTypes } from './types';

const initialState: IAnswerState = {
    data: [],
    loading: [],
};

const reducer: Reducer<IAnswerState> = (state = initialState, action) => {
    switch (action.type) {
        case EAnswerActionTypes.FETCH_REQUEST:
        case EAnswerActionTypes.ADD_REQUEST:
            let flag = false;
            let toUpdate = state.loading.map(online => {
                if (online.ques_id === action.payload.ques_id) {
                    flag = true;
                    return {
                        ...online,
                        loading: true,
                        error: '',
                    }
                } else {
                    return online;
                }
            });
            if (!flag) {
                toUpdate = [
                    ...state.loading,
                    {
                        ques_id: action.payload.ques_id,
                        loading: true,
                        error: '',
                    }
                ]
            }
            return {
                ...state,
                loading: toUpdate,
            };
        case EAnswerActionTypes.ADD_SUCCESS:
            let flagAdd = false;
            let toUpdateAdd = state.data.map(answer => {
                // console.log(answer, action.payload);
                if (answer.ques_id === action.payload.data.ques_id) {
                    flagAdd = true;
                    return {
                        ...answer,
                        answer: action.payload.data.answer,
                    }
                } else {
                    return answer;
                }
            });
            if (!flagAdd) {
                toUpdateAdd = [
                    ...state.data,
                    {
                        id: action.payload.id,
                        ques_id: action.payload.data.ques_id,
                        answer: action.payload.data.answer,
                        user_id: action.payload.user_id,
                    }
                ]
            }
            return {
                ...state,
                loading: state.loading.map(online =>
                    online.ques_id === action.payload.data.ques_id ? {
                        ...online,
                        loading: false,
                        error: '',
                    } : online,
                ),
                data: toUpdateAdd,
            };
        case EAnswerActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading: state.loading.map(online =>
                    online.ques_id === 'all' ? {
                        ...online,
                        loading: false,
                        error: '',
                    } : online,
                ),
                data: action.payload.data,
            };
        case EAnswerActionTypes.FETCH_ERROR:
        case EAnswerActionTypes.ADD_ERROR:
            return {
                ...state,
                loading: state.loading.map(online =>
                    online.ques_id === action.payload.ques_id ? {
                        ...online,
                        loading: false,
                        error: action.payload.message
                    } : online
                ),
            };
        default:
            return state;
    }
};
export { reducer as answerReducer };