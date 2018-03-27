import { combineReducers } from 'redux';
import currentGame from './currentGame';


const rootReducer = combineReducers({
    currentGame: currentGame,
})

export default rootReducer; 