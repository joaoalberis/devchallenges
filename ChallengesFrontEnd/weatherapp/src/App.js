import { useState } from 'react';
import './App.css';
import { TodayInfo } from './components/TodayInfo';
import { WeatherInfo } from './components/WeatherInfo';
import axios from 'axios'

function App() {

  const [location, setLocation] = useState()

  async function weather(lat, lon){
    /* const options = {
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather`,
      params: {
        lat,
        lon,
        appid: process.env.REACT_APP_WEATHER_KEY,
        lang: "pt_br"
      },
    }; */
    const option2 = {
      method: 'GET',
      url: ``
    }
    const response = await axios.request(options)
    console.log(response.data)
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    weather(position.coords.latitude, position.coords.longitude)
  })

  return (
    <div className="flex h-screen overflow-hidden">
      <TodayInfo location={location} setLocation={setLocation} />
      <WeatherInfo location={location} setLocation={setLocation} />
    </div>
  );
}

export default App;
