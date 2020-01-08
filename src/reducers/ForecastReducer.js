import {FETCH_FORECAST_SUCCESS} from '../actions/types';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    const { type, payload} = action;
    switch(type) {
        case FETCH_FORECAST_SUCCESS:
            return payload.list
        default:
            return state;
    }
}