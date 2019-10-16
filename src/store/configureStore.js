import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
//import reducers here
import attributeReducer from '../reducers/attributeReducer';
import playerReducer from '../reducers/playerReducer';
//import thunk from 'redux-thunk' if needed
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            attributes:attributeReducer,
            players:playerReducer
        }), composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}