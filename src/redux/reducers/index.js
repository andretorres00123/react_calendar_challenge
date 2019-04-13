import {combineReducers} from 'redux';
import reminder from './reminderReducer';

const rootReducer = combineReducers({
  'reminder': reminder,
});

export default rootReducer;
