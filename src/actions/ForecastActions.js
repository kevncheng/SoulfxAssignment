import { FETCH_FORECAST_SUCCESS, FETCH_FORECAST_FAIL } from './types';

import axios from 'axios';

export const fetchForecast = city => async dispatch => {
    try {
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6d76c3cb3a60349b088ab46e33612d5b&units=metric`);
        dispatch({
            type: FETCH_FORECAST_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: FETCH_FORECAST_FAIL
        })
    }
}
