import { useEffect, useState } from "react"
import { useGlobalState } from "../../GloabalStateProvider"

export function ResumeDays(){

    const { weather5DaysInfo, tempType } = useGlobalState()
    const [ weather5DaysInfoDetails, setWeather5DaysInfoDetails] = useState([])

    useEffect(() => {
        if(weather5DaysInfo !== undefined) {
            const date = new Date()
            const today = date.getDate()
            const todayHour = date.getHours()
            let day = 1
            setWeather5DaysInfoDetails(
                weather5DaysInfo.list.filter((weatherInfo) => {
                    if(weatherInfo.dt_txt.includes(`-${today + day}`)){
                        const hour = Math.abs(todayHour - weatherInfo.dt_txt.split(':')[0].split(' ')[1])
                        if (hour >= 0 && hour < 2 && day <= 5){
                            console.log(weatherInfo.dt_txt)
                            day++
                            return weatherInfo
                        }
                    }
                })
            )
        }else {
            setWeather5DaysInfoDetails([])
        }
    }, [weather5DaysInfo])


    
    return (
        <div className="flex gap-6">
            {weather5DaysInfoDetails.length > 0 ? weather5DaysInfoDetails.map((weatherInfo, index) => {
                return (
                    <div key={index} className="flex flex-col gap-5 bg-[#1E213A] p-5 text-[#e7e7eb] text-base font-medium">
                        <h3 className="text-center">{weatherInfo.dt_txt.split(` `)[0]}</h3>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`} alt="" />
                        <span className="flex justify-between">
                            <p>{(weatherInfo.main.temp_max).toFixed(1)}{tempType}</p>
                            <p className="text-[#a09fb1]">{(weatherInfo.main.temp_min).toFixed(1)}{tempType}</p>
                        </span>
                    </div>
                )
            }) :
            <div className="flex w-full cursor-not-allowed items-center justify-center">
                <div className="border-[6px] border-t-transparent animate-spin border-cyan-300 rounded-full min-h-[5rem] w-20"/>
            </div>
            }
        </div>
    )
}