import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//createStore import code
import {createStore} from 'redux';

import rootReducer from './store/reducers/rootReducer';

import {Provider} from 'react-redux';

//We create a store using createStore.
//Let's give  reducer as parameter
const store=createStore(rootReducer);

//In store attribute, we place the store that we created.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
