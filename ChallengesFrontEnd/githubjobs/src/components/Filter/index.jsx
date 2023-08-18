import { Checkbox } from "../Checkbox";
import { useState } from 'react'
import data from '../../data.json'

export function Filter({ setResults }) {

    const [checked, setChecked] = useState(false)

    function handleChecked(){
        setChecked(prev => !prev)
    }

    function handleSearchCityState(event){
        if(event.key === 'Enter'){
            const value = event.target.value
            if (value !== undefined && value !== ''){
                const resultsFiltered = data.filter(job => {
                    if(job.location.toLowerCase().includes(value.toLowerCase())) return true;
                    return false;
                })
                setResults(resultsFiltered);
            }
        }
    }

    return (
        <aside className="flex flex-col gap-5">
            <Checkbox identifier='full time' nameLabel='Full Time' checked={checked} change={handleChecked} />
            <div className="flex flex-col gap-3">
                <h3 className="text-gray-400 font-bold text-sm uppercase">Location</h3>
                <input onKeyDown={(e) => handleSearchCityState(e)} className="outline-0 rounded bg-white shadow-md shadow-[rgba(0,0,0,0.05)] placeholder:text-gray-400 font-normal text-xs p-4" type="text" placeholder="City or country" id="" />
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <input type="radio" name="country" id="" />
                        <label className="text-[#334680] text-sm font-medium">London</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="country" id="" />
                        <label className="text-[#334680] text-sm font-medium">Amsterdam</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="country" id="" />
                        <label className="text-[#334680] text-sm font-medium">New York</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="country" id="" />
                        <label className="text-[#334680] text-sm font-medium">Berlim</label>
                    </div>
                </div>
            </div>
        </aside>
    )
}