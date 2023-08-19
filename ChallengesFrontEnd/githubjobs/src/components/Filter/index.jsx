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
            if (value !== ''){
                const resultsFiltered = data.filter(job => {
                    if(job.location.toLowerCase().includes(value.toLowerCase())) return true;
                    return false;
                })
                setResults(resultsFiltered);
            }else {
                setResults(data);
            }
        }
    }

    function handleSearchCity(e){
        const valueCity = e.target.id
        const resultsFiltered = data.filter(job => {
            if(job.location.toLowerCase().includes(valueCity.toLowerCase())) return true;
            return false;
        })
        setResults(resultsFiltered);
    }

    return (
        <aside className="flex flex-col gap-5">
            <Checkbox identifier='full time' nameLabel='Full Time' checked={checked} change={handleChecked} />
            <div className="flex flex-col gap-3">
                <h3 className="text-gray-400 font-bold text-sm uppercase">Location</h3>
                <input onKeyDown={(e) => handleSearchCityState(e)} className="outline-0 rounded bg-white shadow-md shadow-[rgba(0,0,0,0.05)] placeholder:text-gray-400 font-normal text-xs p-4" type="text" placeholder="City or country" id="" />
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <input onClick={e => handleSearchCity(e)} type="radio" name="country" id="Colorado" />
                        <label htmlFor="Colorado" className="text-[#334680] text-sm font-medium">Colorado</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input onClick={e => handleSearchCity(e)} type="radio" name="country" id="San Diego" />
                        <label htmlFor="San Diego" className="text-[#334680] text-sm font-medium">San Diego</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input onClick={e => handleSearchCity(e)} type="radio" name="country" id="New York" />
                        <label htmlFor="New York" className="text-[#334680] text-sm font-medium">New York</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input onClick={e => handleSearchCity(e)} type="radio" name="country" id="Berlin" />
                        <label htmlFor="Berlin" className="text-[#334680] text-sm font-medium">Berlin</label>
                    </div>
                </div>
            </div>
        </aside>
    )
}