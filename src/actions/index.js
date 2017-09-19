import axios from 'axios';
const API_KEY= 'Put your API KEY here';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url=`${ROOT_URL}&q=${city}&units=metric`;
	const request= axios.get(url);

return{
	type: FETCH_WEATHER,
	payload: request
	};

}
