import React, {Component} from 'react'
import PropTypes from 'prop-types'
import transformWeather from './../../services/transformWeather'
import WeatherData from './WeatherData'
import CircularProgress from '@material-ui/core/CircularProgress'

import './styles.css'


const key = 'dc1c5437f664800c522aea2e43f9ebaa'

class WeatherLocation extends Component {

    constructor ({city}) {
        super()
        this.state = {
            city,
            data: null
        }
    }

    componentWillMount() {
        const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${key}`

        fetch(urlApi).then(data => {
            return data.json()
        }).then(res => {
            const data = transformWeather(res)

            this.setState({data})
        })
    }
    
    render = () => {
        const {onWeatherLocationClick} = this.props
        return (
            <div className="card horizontal" onClick={onWeatherLocationClick}>
                <div className="card-stacked">
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{this.state.city}</span>
                        { this.state.data ? <WeatherData data={this.state.data}/> : <CircularProgress /> }
                    </div>
                </div>
            </div>
        )
    }
}


WeatherLocation.porpTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation
