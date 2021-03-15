import { combineReducers } from 'redux';
import Counter  from './data/counter/CounterReducer';

const appReducers = combineReducers({
    Counter
});


// const rootReducer = (state,action) => {
//     //middleWare: Confirmaciones de seguridad, etc.
//     return appReducers;
// }
export default appReducers;
