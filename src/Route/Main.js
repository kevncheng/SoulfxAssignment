import React, { Component } from 'react';
import Day from '../components/day';
import { connect } from 'react-redux';
import { fetchForecast } from '../actions/ForecastActions';
import moment from 'moment';
class Main extends Component {
    state = { 
        searchText: ''
     }

    onEnterPress = e => {
        if(e.key === 'Enter') {
            this.props.fetchForecast(this.state.searchText)
        }
    }
    renderWeatherIcon = weather => {
        switch(weather) {
            case 'Thunderstorm':
                return 'wi-lightning'
            case 'Rain':
                return 'wi-rain-wind'
            case 'Snow':
                return 'wi-snow'
            case 'Clouds':
                return 'wi-cloudy'
            case 'Fog':
                return 'wi-fog'
            case 'Drizzle':
                return 'wi-sleet'
            case 'Sunny':
                return 'wi-sunny'
            case 'Clear':
                return 'wi-night-clear'
            default:
                return 'wi-na'
        }
    }
    renderForecast = () => {
        const { forecastReducer, alertReducer: { message } } = this.props;
        let date = '';
        let dayCount = 0;
        if(message) {
            return <h1>{ message }</h1>
        }
        else {
            return forecastReducer.map((day,i) => {
                const { dt, weather, main: {temp} } = day;
                if(date !== moment.unix(dt).format('dddd') && dayCount <= 4) {
                    date = moment.unix(dt).format('dddd');
                    dayCount = dayCount + 1;
                    return (
                        <Day key = {i} day = {dt} temp = {Math.round(temp)} icon = {this.renderWeatherIcon(weather[0].main)} weather = {weather[0].main}/>
                    );
                }
                return <div style = {{display:'none'}}/>
            })
        }
    }

    render() {
        const { fetchForecast } = this.props;
        const { searchText } = this.state;
        return ( 
            <div>
                <div className='ui input'>
                    <input
                        id='location'
                        placeholder="Search Weather By City"
                        value={searchText}
                        style = {{ margin: '5px'}}
                        onChange={e => this.setState({searchText: e.target.value})}
                        onKeyPress = {e => this.onEnterPress(e)}
                    />
                    <button 
                        className ='ui button'
                        style = {{ margin: '5px'}}
                        onClick = {() => fetchForecast(searchText)}
                    >
                        Search
                    </button>
                </div>
                <div style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {this.renderForecast()}
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
    forecastReducer: state.ForecastReducer,
    alertReducer: state.AlertReducer
})
export default connect(mapStateToProps, {fetchForecast})(Main);