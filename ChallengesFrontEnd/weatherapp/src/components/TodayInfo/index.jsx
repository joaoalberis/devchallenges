import mylocation from '../../assets/myLocation.svg'
import location from '../../assets/location.svg'
import clear from '../../assets/Clear.png'
import hail from '../../assets/Hail.png'
import HeavyCloud from '../../assets/HeavyCloud.png'
import HeavyRain from '../../assets/HeavyRain.png'
import LightCloud from '../../assets/LightCloud.png'
import LightRain from '../../assets/LightRain.png'
import Shower from '../../assets/Shower.png'
import Sleet from '../../assets/Sleet.png'
import Snow from '../../assets/Snow.png'
import Thunderstorm from '../../assets/Thunderstorm.png'
import { useState } from 'react'

export function TodayInfo(){

    const [weatherIcon, setWeatherIcon] = useState(clear)
    const [weatherText, setWeatherText] = useState('Clear')
    const [locationText, setLocationText] = useState('Helsinki')
    const [temp, setTemp] = useState('15')

    return (
        <aside className="flex items-center flex-col gap-10 p-12  bg-[#1E213A] bg-contain bg-no-repeat bg-[url('./assets/background.png')] w-1/3 h-full">
            <div className='flex self-stretch justify-between'>
                <button className="text-[#e7e7eb] text-base font-medium px-3 py-2 bg-[#6e707a] shadow-md shadow-[#00000040]">Search for places</button>
                <img className='bg-[#6e707a] rounded-full p-2 h-10' src={mylocation} alt="" />
            </div>
            <img className="h-52 w-52" src={weatherIcon} alt="Icone do tempo" />
            <p className="text-[#e7e7eb] text-9xl font-medium">{temp}</p>
            <p className="text-[#a09fb1] text-3xl font-semibold">{weatherText}</p>
            <div className="flex flex-col gap-5">
                <p className="text-[#88869d] text-lg font-medium">Today ° Fri 5 July</p>
                <p className="flex gap-3 text-[#88869d] font-semibold text-lg items-center self-center"><img className="h-6" src={location} alt="" /> {locationText}</p>
            </div>
        </aside>
    )
}