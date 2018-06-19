// import community library
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware  } from 'connected-react-router';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

// import reducers
import { questions } from './questions';
import { answers } from './answers';
import { user } from './user';

export const history = createBrowserHistory();
export let configureStore = () => {
    // make history creator
    const rootReducers = combineReducers({
        questions,
        answers,
        user
    });

    // make store
    return createStore(
        connectRouter(history)(rootReducers),
        {},
        compose(
            applyMiddleware(
                routerMiddleware(history),
                reduxThunk,
                reduxLogger,
            )
        )
    );
}