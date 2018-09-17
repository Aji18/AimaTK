// import community library
import {createStore, compose, applyMiddleware, Reducer} from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import rootReducers from "./rootReducer";

const makeStore = ( rootReducers: Reducer ) => (
    createStore(
        connectRouter(history)(rootReducers),
        {},
        compose(
            applyMiddleware(
                routerMiddleware(history),
                reduxThunk,
                reduxLogger,
            )
        )
    )
);


export { IApplicationState } from './rootReducer';
export const history = createBrowserHistory();
export const configureStore = () => {
    // const store = makeStore(rootReducers);

    /* const mdl = module as any;
    if (mdl.hot) {
        console.log('1');
        mdl.hot.accept('.rootReducer', () => {
            console.log('2');
            const nextRootReducer = require('./rootReducer').default;
            // const finalReducer = {...nextRootReducer, router: routerReducer };
            store.replaceReducer(nextRootReducer);
            console.log('3');
        });
    } */

    return makeStore(rootReducers);
};