import React, { Component } from 'react';
import './App.scss';
import LocationList from './components/LocationList'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

const cities = ['Salto,uy', 'Buenos Aires,ar', 'Brasilia,br', 'Washington DC.,us', 'Madrid,es']

class App extends Component {

	handleSelectionLocation = city => {
		console.log(`onSelectedLocation ${city}`)
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="card">
						<div className="card-content">
							<span className="card-title activator grey-text text-darken-4">Weather App</span>
							<div className="row">
								<div className="col s6 location-list">
									<LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}/>
								</div>
								<div className="col s6">
								
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
