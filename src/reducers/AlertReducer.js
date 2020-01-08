// Reducer for any errors that might occur
import { FETCH_FORECAST_FAIL, FETCH_FORECAST_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
    message: ''
};

export default (state = INITIAL_STATE, action) => {
    const { type} = action;
    switch(type) {
        case FETCH_FORECAST_SUCCESS:
            return INITIAL_STATE;
        case FETCH_FORECAST_FAIL:
            return {...state, message:'Please input a valid city'}
        default:
            return state;
    }
}