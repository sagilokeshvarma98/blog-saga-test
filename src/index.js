import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/jquery/dist/jquery'

import {appState} from './redux/store'
import {RootSaga} from './redux/saga/rootSaga'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

const mystore=createStore(appState,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga);

ReactDOM.render(
  <Provider store ={mystore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
