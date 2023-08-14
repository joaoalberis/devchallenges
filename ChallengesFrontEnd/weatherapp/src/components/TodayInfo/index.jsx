import mylocation from '../../assets/myLocation.svg'
import locations from '../../assets/location.svg'
import { useState } from 'react'
import { SearchPlaces } from '../SearchPlaces'
import { useGlobalState } from '../../GloabalStateProvider'
import {getDate} from '../../lib/getDate'

export function TodayInfo({setLocation}){

    const [searchGui, setSearchGui] = useState(false) // State that controls the search GUI
    const { weatherInfo, tempType } = useGlobalState() // states that keep the weather of the current day and the type of temperature
    const { dayWeek, dayNumber, monthString} = getDate(new Date().toISOString()) // function that gets the day of the month, day of the week, and the month
    
    return (
        <aside className={`${!searchGui ? "bg-[url('./assets/background.png')]" : 'max-sm:min-h-screen'} relative flex items-center flex-col gap-10 p-12  bg-[#1E213A] overflow-hidden bg-contain bg-no-repeat w-1/3 min-w-max max-sm:overflow-visible max-sm:w-full h-full`}>
            {!searchGui ? 
                <>
                    <div className='flex self-stretch justify-between'>
                        <button onClick={() => setSearchGui(true)} className="text-[#e7e7eb] text-base font-medium px-3 py-2 bg-[#6e707a] shadow-md shadow-[#00000040]">Search for places</button>
                        <img onClick={() => setLocation('')} className='bg-[#6e707a] cursor-pointer rounded-full p-2 h-10' src={mylocation} alt="" />
                    </div>
                    {weatherInfo !== undefined ? 
                    <>
                    <img className="h-52 w-52" src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`} alt="Icone do tempo" />
                    <p className="text-[#e7e7eb] text-6xl font-medium">{weatherInfo.main.temp.toFixed(1)}{tempType}</p>
                    <p className="text-[#a09fb1] text-3xl font-semibold">{weatherInfo.weather[0].description}</p>
                    <div className="flex flex-col gap-5">
                        <p className="text-[#88869d] text-lg font-medium">Today ° {dayWeek}, {dayNumber} {monthString}</p>
                        <p className="flex gap-1'' text-[#88869d] font-semibold text-lg items-center self-center"><img className="h-6" src={locations} alt="" /> {weatherInfo.name}, {weatherInfo.sys.country}</p>
                    </div></> : <div className="border-[6px] m-auto border-t-transparent animate-spin border-cyan-300 rounded-full min-h-[5rem] w-20"></div>}
                </> 
                : <SearchPlaces setLocation={setLocation}  setSearchGui={setSearchGui} />
            }
        </aside>
    )
}