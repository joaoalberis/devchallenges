import { useState } from 'react'
import { useGlobalState } from '../../GloabalStateProvider'
import { Footer } from '../Footer'
import {ResumeDays} from '../ResumeDays'
import { TodayHightlights } from '../TodayHightlights'

export function WeatherInfo(){

    const { setTempType, setPrefixWindSpeed } = useGlobalState() // States to update the temperature type and wind prefix
    const [active, setActive] = useState(false) // 

    return (
        <main className="flex flex-col gap-8 px-16 py-8 bg-[#100E1D] w-full overflow-y-auto max-sm:overflow-visible ">
            <div className="flex self-end gap-4 max-sm:fixed max-sm:bottom-4 max-sm:right-4 max-sm:flex-col">
                <button onClick={() => {setTempType('°C'); setActive(false); setPrefixWindSpeed('s')}} className={`${active ? 'bg-[#585676]' : 'bg-[#e7e7eb]'} max-sm:px-3 max-sm:py-2.5 rounded-full py-1.5 px-2`}>°C</button>
                <button onClick={() => {setTempType('°F'); setActive(true); setPrefixWindSpeed('h')}} className={`bg-[#585676] ${active && 'bg-[#e7e7eb]'} max-sm:px-3 max-sm:py-2.5 rounded-full py-1.5 px-2`}>°F</button>
            </div>
            <ResumeDays  />
            <TodayHightlights />
            <Footer />
        </main>
    )
}