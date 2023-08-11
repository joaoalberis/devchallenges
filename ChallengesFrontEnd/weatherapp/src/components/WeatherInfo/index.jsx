import { Footer } from '../Footer'
import {ResumeDays} from '../ResumeDays'
import { TodayHightlights } from '../TodayHightlights'

export function WeatherInfo(){
    return (
        <main className="flex flex-col gap-8 px-16 py-8 bg-[#100E1D] w-full">
            <div className="flex self-end gap-4">
                <button className="bg-[#e7e7eb] rounded-full py-1.5 px-2">°C</button>
                <button className="bg-[#585676] rounded-full py-1.5 px-2">°F</button>
            </div>
            <ResumeDays />
            <TodayHightlights />
            <Footer />
        </main>
    )
}