import React from 'react';
import moment from 'moment';
import '../css/day.css';

const Day = ({
    day,weather,temp,icon
}) => (
    <div className = 'divContainer'>
        <h2>{moment.unix(day).format('dddd')}</h2>
        <i className={`wi ${icon} iconStyle`}></i>
        <div>{weather}</div>
        <div>{temp  + '\u00B0C'}</div>
    </div>
);

export default Day;
