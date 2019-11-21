import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
import receitas from '../reducers/receitasReducer';


const reducers = combineReducers({
    receitas
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;