import { combineReducers } from 'redux';
import ForecastReducer from './ForecastReducer';
import AlertReducer from './AlertReducer';

export default combineReducers({
    ForecastReducer,
    AlertReducer
});
