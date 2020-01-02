import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import {preloadPlayers} from './actions/players';
import '../src/styles/styles.scss';
import "regenerator-runtime/runtime";

import configureStore from './store/configureStore';

import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<p>loading...</p>, document.getElementById('app'));
store.dispatch(preloadPlayers()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

//ReactDOM.render(jsx, document.getElementById('app'));

serviceWorker.unregister();
