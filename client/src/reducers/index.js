import { combineReducers } from 'redux';

import { questions } from './questions.js';
import { answers } from './answers.js';
import { user } from './user.js';

export default combineReducers({
    questions,
    answers,
    user
});