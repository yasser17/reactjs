import React from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation'

class LocationList extends React.Component {
    constructor ({cities, onSelectedLocation}) {
        super()
        this.cities = cities
        this.onSelectedLocation = onSelectedLocation
    }

    handleWeatherLocationClick = city  => {
        this.onSelectedLocation(city)
    }

    strToComponent = cities => (
        cities.map(city => (
            <WeatherLocation city={city} key={city} 
            onWeatherLocationClick={() => this.handleWeatherLocationClick(city)}/>
        ))
    )

    render () {


        return (
            <div>
                {this.strToComponent(this.cities)}
            </div>
        )
    } 
}

LocationList.porpTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList
