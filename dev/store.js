import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';

import PlaceholderReducer from './reducers/PlaceholderReducer';
import TodosReducer from './Pages/RouteRedirectAndAsync/reducers/TodosReducer'

const store = createStore(
    combineReducers({
        PlaceholderReducer,
        TodosReducer,
        form: formReducer
    }),
    {},
    applyMiddleware(logger,thunk,promise())

);

export default store;