import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

import rootReducer from './reducers';

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, promise, logger));
    return store;
}

