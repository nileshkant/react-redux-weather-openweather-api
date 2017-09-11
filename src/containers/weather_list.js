import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import  GoogleMap from '../components/google_map'
class WeatherList extends Component{
	renderWeather(cityData){
		const temps=cityData.list.map(weather=> weather.main.temp);
		const CurrentTemp= cityData.list[0].main.temp;
		const CurrentPre= cityData.list[0].main.pressure;
		const CurrentHum= cityData.list[0].main.humidity;
		const Pressures=cityData.list.map(weather=> weather.main.pressure);
		const Humidities=cityData.list.map(weather=> weather.main.humidity);
		const lon= cityData.city.coord.lon;
		const lat= cityData.city.coord.lat;


		return(
			<tr key={cityData.city.name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="blue" current={`Current Temperature : ${CurrentTemp}°C`} /></td>
				<td><Chart data={Pressures} color="green" current={`Current Pressure : ${CurrentPre} Pa`}/></td>
				<td><Chart data={Humidities} color="red" current={`Current Humidity : ${CurrentHum} %`} /></td>
			</tr>
		);
	}

	render(){
		return(
			<table className="table table-hover">
			<thead>
			<tr>
			<th>City</th>
			<th>Temp</th>
			<th>Pressure</th>
			<th>Humidity</th>
			</tr>
			</thead>
			<tbody>
				{this.props.weather.map(this.renderWeather)}
			</tbody>
			</table>
			);
	}
}

function mapStateToProps({weather}){
	return{weather};
}

export default connect(mapStateToProps)(WeatherList);