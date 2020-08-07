import React from 'react';
import ReactDOM from 'react-dom';
import Navigo from 'navigo';
import Main from './page/main';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';

const root = null;
const useHash = true;
const router = new Navigo(root, useHash);

export const store = createStore(
  reducers,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //I have no idea
)

const renderRoot = document.getElementById('root');

function renderPage(component){
  ReactDOM.render(
    <Provider store={store}>
      {component}
    </Provider>,
    renderRoot
  );
}

function registerRoute(route, component){
  router.on(route, (params, query) => {
    renderPage(component);
  })
}

registerRoute("", <Main/>) //default route
router.resolve(); 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
