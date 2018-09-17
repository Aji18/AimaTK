// import community package
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import {Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

// import local files
import {configureStore, history} from "./reducers";
import App from './components/App';
import {actionThunk} from "./utils/Actioner";
import {fetchRequest} from "./reducers/question";

export default async function main() {
    const store = configureStore();

    actionThunk( thunk => fetchRequest( thunk ), store.dispatch );

    const render = (App: any) => {
        ReactDOM.render(
            <>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <>
                            <CssBaseline/>
                            <Route component={App} />
                        </>
                    </ConnectedRouter>
                </Provider>
            </>,
            document.getElementById('root') as HTMLElement
        );
    };

    render(App);

    if ((module as any).hot) {
        console.log('ENABLED');
        (module as any).hot.accept('./components/App', () => {
            console.log('ACCEPTED');
            const NextApp = require('./components/App').default;
            render(NextApp);
        })
    }
};