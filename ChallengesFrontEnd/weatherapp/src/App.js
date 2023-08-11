import './App.css';
import { TodayInfo } from './components/TodayInfo';
import { WeatherInfo } from './components/WeatherInfo';

function App() {
  return (
    <div className="h-screen flex">
      <TodayInfo />
      <WeatherInfo />
    </div>
  );
}

export default App;
