import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, push } from 'connected-react-router';
import { Provider } from 'react-redux';

import { history, configureStore } from "./reducers";

import App from './component/App';
import Home from './component/Home';
import Profile from './component/Profile';
import SOP from './component/SOP';
import Quality from './component/Quality';
import AimaTK from './component/AimaTK';
import { answer, getUser, requestQuestions } from './actions';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Switch>
                    <Route exact path='/'        component={Home}/>
                    <Route       path='/profile' component={Profile}/>
                    <Route       path='/sop'     component={SOP}/>
                    <Route       path='/quality' component={Quality}/>
                    <Route       path='/aimatk'  component={AimaTK}/>
                </Switch>
            </App>
        </ConnectedRouter>
    </Provider>
, document.getElementById('root'));

/**store.dispatch((dispatch, getState) => {
    getUser({ dispatch, getState }, 'Moch. Rajendra Yudhistira', 150535600210);
    requestQuestions({ dispatch, getState });
});*/

global.answer = (ques_id, answere) => {
    store.dispatch((dispatch, getState) => answer({dispatch, getState}, ques_id, answere));
};
global.store = store;
global.push = push;