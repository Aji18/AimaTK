const ADD_DIMENSIONS = 'QUESTIONS_ADD_DIMENSIONS';

export class questionsDispatcher {
    static addDimensions(dimensions) {
        return {
            type: ADD_DIMENSIONS,
            dimensions,
        }
    }
}
export let questions = (state = [], action) => {
    switch (action.type) {
        case ADD_DIMENSIONS:
            return Object.assign([], state, action.dimensions);
        default:
            return state;
    }
};