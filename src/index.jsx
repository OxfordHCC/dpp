import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import Main from './container/main';
import { init } from './actions/settings/detectionServices';
import { refreshCurrent } from './actions/current';

const appRoot = document.getElementById('root');

//TODO: move to separate file, because we ocasionally need to dispatch events from libraries
//and importing store from index.jsx is a bit unintuitive.
export const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
	  <Main/>
    </Provider>,
	appRoot
);

store.dispatch(init());
store.dispatch(refreshCurrent());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
