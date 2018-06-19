import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import reducers from './reducers/index';
import {answer, getUser, requestQuestions} from './actions';

const reduxMiddleware = applyMiddleware(reduxThunk, reduxLogger);
const store = createStore(reducers ,reduxMiddleware);

ReactDOM.render(
    <Provider store={store}>
        <h1>Hello World</h1>
    </Provider>
, document.getElementById('root'));

store.dispatch((dispatch, getState) => {
    getUser({ dispatch, getState }, 'Moch. Rajendra Yudhistira', 150535600210);
    requestQuestions({ dispatch, getState });
});

global.answer = (ques_id, answere) => {
    store.dispatch((dispatch, getState) => answer({dispatch, getState}, ques_id, answere));
};