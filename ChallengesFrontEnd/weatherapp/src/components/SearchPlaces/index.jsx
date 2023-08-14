import { useState } from 'react';
import close from '../../assets/close.svg'
import axios from 'axios'

export function SearchPlaces({setSearchGui, setLocation}) {

    const [searchResults, setSearchResults] = useState([]) // State that saves city search API results

    // Function responsible for calling the search API
    async function search(e){
        const options = {
        method: 'GET',
        url: 'https://city-and-state-search-api.p.rapidapi.com/search',
        params: {q: `${e.target.value}`},
        headers: {
            'X-RapidAPI-Key': 'ec385ef2e6msh94a5ba5ed5a2006p18c928jsnbc2cde6746af',
            'X-RapidAPI-Host': 'city-and-state-search-api.p.rapidapi.com'
        }
        };
        try {
            const response = await axios.request(options);
            setSearchResults(response.data)
        } catch (error) {
            console.error(error);
        }
      }

    return (
        <>
            <div className="flex gap-3">
                <input onKeyUp={(e) => search(e)} className="text-[#616475] p-2 border border-[#e7e7eb] outline-none bg-transparent placeholder:text-[#616475] placeholder:text-base placeholder:font-medium" type="text" placeholder="Search by City" id="" />
                <button className="text-[#e7e7eb] text-base font-semibold bg-[#3C47E9] p-2">Search</button>
                <img onClick={() => setSearchGui(false)} className="absolute top-3 right-3 cursor-pointer h-8" src={close} alt="" />
            </div>
            <div className="flex flex-col w-full overflow-auto">
                {searchResults.length > 0 && searchResults.map(search => {
                    if (search.type === 'city') {
                        return (
                            <div onClick={() => {setLocation(search.name); setSearchGui(false)}} className="hover:border hover:border-[#616475] hover:bg-[url('./assets/chevron_right.svg')] bg-no-repeat bg-right p-4 cursor-pointer text-[#e7e7eb] text-base font-medium" key={search.id}>
                                <p>{search.name}, {search.state_name}</p>
                                <span>{search.country_name}</span>
                            </div>
                        )
                    }
                    }).slice(0,20)}
            </div>
        </>
    )
}