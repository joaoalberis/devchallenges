import { useState } from "react"
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

export function ResumeDays(){

    const [weatherIcon, setWeatherIcon] = useState(hail)

    return (
        <div className="flex gap-6">
            <div className="flex flex-col gap-5 bg-[#1E213A] p-5 text-[#e7e7eb] text-base font-medium">
                <h3 className="text-center">Tomorrow</h3>
                <img className="h-28 w-28 self-start mr-8" src={Sleet} alt="" />
                <span className="flex justify-between mx-6">
                    <p>16°C</p>
                    <p className="text-[#a09fb1]">11°C</p>
                </span>
            </div>
            <div className="flex flex-col gap-5 bg-[#1E213A] p-5 text-[#e7e7eb] text-base font-medium">
                <h3 className="text-center">Tomorrow</h3>
                <img className="h-28 w-28 self-start mr-8" src={Snow} alt="" />
                <span className="flex justify-between mx-6">
                    <p>16°C</p>
                    <p className="text-[#a09fb1]">11°C</p>
                </span>
            </div>
            <div className="flex flex-col gap-5 bg-[#1E213A] p-5 text-[#e7e7eb] text-base font-medium">
                <h3 className="text-center">Tomorrow</h3>
                <img className="h-28 w-28 self-start mr-8" src={Shower} alt="" />
                <span className="flex justify-between mx-6">
                    <p>16°C</p>
                    <p className="text-[#a09fb1]">11°C</p>
                </span>
            </div>
            <div className="flex flex-col gap-5 bg-[#1E213A] p-5 text-[#e7e7eb] text-base font-medium">
                <h3 className="text-center">Tomorrow</h3>
                <img className="h-28 w-28 self-start mr-8" src={HeavyCloud} alt="" />
                <span className="flex justify-between mx-6">
                    <p>16°C</p>
                    <p className="text-[#a09fb1]">11°C</p>
                </span>
            </div>
            <div className="flex flex-col gap-5 bg-[#1E213A] p-5 text-[#e7e7eb] text-base font-medium">
                <h3 className="text-center">Tomorrow</h3>
                <img className="h-28 w-28 self-start mr-8" src={HeavyRain} alt="" />
                <span className="flex justify-between mx-6">
                    <p>16°C</p>
                    <p className="text-[#a09fb1]">11°C</p>
                </span>
            </div>
        </div>
    )
}