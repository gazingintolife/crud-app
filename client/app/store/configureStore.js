import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from '../reducers/data';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            reducer: dataReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}