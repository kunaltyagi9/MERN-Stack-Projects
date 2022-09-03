import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todosReducer } from './reducers/todosReducer';
import { currentTabReducer } from './reducers/currentTabReducer';

const reducer = combineReducers({
    todos: todosReducer, 
    currentTab: currentTabReducer
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;