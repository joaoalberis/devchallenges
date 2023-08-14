import { useEffect, useState } from 'react';
import { TodayInfo } from './components/TodayInfo';
import { WeatherInfo } from './components/WeatherInfo';
import { useGlobalState } from './GloabalStateProvider';
import {api} from './lib/api'
import { Modal } from './components/Modal';

function App() {

  const [location, setLocation] = useState(''); // location current
  const { setWeatherInfo, setWeather5DaysInfo, tempType} = useGlobalState(); // state of weather today, weather 5 days and temperature type(°c and °f)
  const [modal, setModal] = useState({}) // using to controller modal

  // function request api
  async function weather(location, tempType) {
    const appid = process.env.REACT_APP_WEATHER_KEY
    const units = `${tempType === '°F' ? 'imperial' : 'metric'}`
    if (location !== ''){
      try {
        const response = await api.get(`/weather?q=${location}&appid=${appid}&units=${units}`)
        const response2 = await api.get(`/forecast?q=${location}&appid=${appid}&units=${units}`)
        setWeatherInfo(response.data)
        setWeather5DaysInfo(response2.data)
      }catch(err){
        if (err.response.status === 404){
          setWeatherInfo(undefined)
          setWeather5DaysInfo(undefined)
          setModal({ message: err.response.data.message, type: 'error'})
        }
      }
    }else if(location === '') {
      navigator.geolocation.getCurrentPosition(async function(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const response = await api.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${appid}&units=${units}`)
        const response2 = await api.get(`/forecast?lat=${latitude}&lon=${longitude}&appid=${appid}&units=${units}`)
        setWeatherInfo(response.data)
        setWeather5DaysInfo(response2.data)
      })
    }
  }

  useEffect(() => {
    weather(location, tempType)
  },[location, tempType])
  
  return (
    <div className="flex h-screen max-sm:flex-col">
      <Modal message={modal.message} type={modal.type} onExit={() => setModal({})}/>
      <TodayInfo weather={weather} setLocation={setLocation} />
      <WeatherInfo />
    </div>
  );
}

export default App;
