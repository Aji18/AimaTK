const ADD_ANSWER = 'ANSWERS_ADD_ANSWER';
const SRV_ANSWERS = 'ANSWERS_SERVER_ANSWERS';
const ADD_ERR_ANSWER = 'ANSWERS_ADD_ERROR_ANSWER';
const RMV_ERR_ANSWER = 'ANSWERS_RMV_ERROR_ANSWER';

export class answersDispatcher {
    static addAnswer(ques_id, answer) {
        return {
            type: ADD_ANSWER,
            ques_id,
            answer
        }
    }
    static srvAnswers(answers) {
        return {
            type: SRV_ANSWERS,
            answers
        }
    }
    static addErrAnswer(ques_id, answer) {
        return {
            type: ADD_ERR_ANSWER,
            ques_id,
            answer,
        }
    }
    static rmvErrAnswer(ques_id) {
        return {
            type: RMV_ERR_ANSWER,
            ques_id
        }
    }
}
export let answers = (state = {
    localAnswers: [],
    serverAnswers: [],
    errorAnswers: [],
}, action) => {
    switch (action.type) {
        case ADD_ANSWER:
            if (state.localAnswers.filter(answer => answer.ques_id === action.ques_id).length === 0) {
                return Object.assign({}, state, {
                    localAnswers: [
                        ...state.localAnswers,
                        {
                            ques_id: action.ques_id,
                            answer: action.answer,
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    localAnswers: state.localAnswers.map(answer =>
                        answer.ques_id === action.ques_id ?
                            {
                                ...answer,
                                answer: action.answer,
                            } : answer
                    )
                });
            }
        case SRV_ANSWERS:
            return Object.assign({}, state, { serverAnswers: action.answers });
        case ADD_ERR_ANSWER:
            return Object.assign({}, state,
                { errorAnswers: [
                    ...state.errorAnswers,
                    {
                        ques_id: action.ques_id,
                        answer: action.answer,
                    }
                ]}
            );
        case RMV_ERR_ANSWER:
            return Object.assign({}, state, {
                errorAnswers: state.errorAnswers.filter(answer => answer.ques_id !== action.ques_id)
            });
        default:
            return state;
    }
};