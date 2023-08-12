import navigation from '../../assets/navigation.svg';

export function TodayHightlights() {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-[#e7e7eb] text-2xl font-bold">Today's Highlights</h2>
            <div className="grid grid-cols-2 grid-rows-max-content-2 gap-12">
                <div className="bg-[#1E213A] flex flex-col items-center gap-7 py-7">
                    <p className="text-[#e7e7eb] text-base font-medium">Wind status</p>
                    <p className="text-[#e7e7eb] text-4xl font-medium"><span className="font-bold text-6xl">7</span> mph</p>
                    <p className="flex items-center gap-3 text-[#e7e7eb] text-sm font-medium"><img className="-rotate-180 bg-[#a9a9a9] p-2 rounded-full h-12" src={navigation} alt="" /> WSW</p>
                </div>
                <div className="import search from '../../assets/Search.svg'
import close from '../../assets/close.svg'
bg-[#1E213A] flex flex-col items-center gap-7 py-7">
                    <p className="text-[#e7e7eb] text-base font-medium">Humidity</p>
                    <p className="text-[#e7e7eb] text-4xl font-medium"><span className="font-bold text-6xl">84</span> %</p>
                </div>
                <div className="bg-[#1E213A] flex flex-col items-center gap-7 py-7">
                    <p className="text-[#e7e7eb] text-base font-medium">Visibility</p>
                    <p className="text-[#e7e7eb] text-4xl font-medium"><span className="font-bold text-6xl">6,4</span> miles</p>
                </div>
                <div className="bg-[#1E213A] flex flex-col items-center gap-7 py-7">
                    <p className="text-[#e7e7eb] text-base font-medium">Air Pressure</p>
                    <p className="text-[#e7e7eb] text-4xl font-medium"><span className="font-bold text-6xl">998</span> mb</p>
                </div>
            </div>
        </div>
    )
}