import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



import './iconfont/iconfont.css'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
