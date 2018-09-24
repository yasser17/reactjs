import React from "react";
import WeatherTemperature from './WeatherTemperature'
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo'
import './styles.css'

class WeatherData extends React.Component {

    constructor ({data}) {
        super()
        this.data = data
    }


    render = () => {
        const {temperature, weatherState, humidity, wind} = this.data
        return (
            <div>
                <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
            
                <WeatherExtraInfo humidity={humidity} wind={wind} />
            </div>
        )
    }
    
}


WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }),
}

export default WeatherData
