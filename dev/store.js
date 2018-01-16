import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';

import PlaceholderReducer from './reducers/PlaceholderReducer';


const store = createStore(
    combineReducers({
        PlaceholderReducer

    }),
    {},
    applyMiddleware(logger,promise())

);

export default store;