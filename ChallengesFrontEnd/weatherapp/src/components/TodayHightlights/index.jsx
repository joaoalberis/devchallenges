import { useGlobalState } from '../../GloabalStateProvider';
import navigation from '../../assets/navigation.svg';

export function TodayHightlights() {

    const { weatherInfo, prefixWindSpeed } = useGlobalState() // state that saves the current time and wind prefix information

    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-[#e7e7eb] text-2xl font-bold">Today's Highlights</h2>
            {weatherInfo !== undefined ? <div className="grid grid-cols-2 grid-rows-max-content-2 gap-12 max-lg:grid-cols-1">
                <div className="bg-[#1E213A] flex flex-col items-center gap-7 py-7">
                    <p className="text-[#e7e7eb] text-base font-medium">Wind status</p>
                    <p className="text-[#e7e7eb] text-4xl font-medium"><span className="font-bold text-6xl">{weatherInfo.wind.speed}</span> mp{prefixWindSpeed}</p>
                    <p className="flex items-center gap-3 text-[#e7e7eb] text-sm font-medium"><img className={`rotate-[${weatherInfo.wind.deg}] bg-[#a9a9a9] p-2 rounded-full h-8`} src={navigation} alt="" /> WSW</p>
                </div>
                <div className="bg-[#1E213A] flex flex-col items-center gap-7 py-7">
                    <p className="text-[#e7e7eb] text-base font-medium">Humidity</p>
                    <p className="text-[#e7e7eb] text-4xl font-medium"><span className="font-bold text-6xl">{weatherInfo.main.humidity}</span> %</p>
                    <div className="w-4/5 relative rounded-full h-2 bg-white text-[#a09fb1] font-bold text-xs">
                        <span className="absolute -top-4 left-0">0</span>
                        <span className="absolute -top-4 right-1/2">50</span>
                        <span className="absolute -top-4 right-0">100</span>
                        <div className={`w-[${weatherInfo.main.humidity}%] h-2 bg-yellow-300 rounded-full`}></div>
                        <span className="absolute right-0">%</span>
                    </div>
                </div>
                <div className="bg-[#1E213A] flex flex-col items-center gap-7 py-7">
                    <p className="text-[#e7e7eb] text-base font-medium">Visibility</p>
                    <p className="text-[#e7e7eb] text-center text-4xl font-medium"><span className="font-bold text-6xl">{(weatherInfo.visibility / 1609).toFixed(2)}</span> miles</p>
                </div>
                <div className="bg-[#1E213A] flex flex-col items-center gap-7 py-7">
                    <p className="text-[#e7e7eb] text-base font-medium">Air Pressure</p>
                    <p className="text-[#e7e7eb] text-4xl font-medium"><span className="font-bold text-6xl">{weatherInfo.main.pressure}</span> mb</p>
                </div>
            </div> : 
            <div className="flex justify-center cursor-not-allowed items-center">
                <div className="border-[6px] border-t-transparent animate-spin border-cyan-300 rounded-full min-h-[5rem] w-20"></div>
            </div>}
        </div>
    )
}