import { useState } from 'react';
import search from '../../assets/Search.svg'
import chevron_right from '../../assets/chevron_right.svg'
import close from '../../assets/close.svg'
import axios from 'axios'

export function SearchPlaces({setSearchGui, setLocation}) {

    const [searchResults, setSearchResults] = useState([])

    async function search(e){
        const options = {
          method: 'GET',
          url: 'https://city-and-state-search-api.p.rapidapi.com/search',
          params: {q: `${e.target.value}`},
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
            'X-RapidAPI-Host': 'city-and-state-search-api.p.rapidapi.com'
          }
        };
        const response = await axios.request(options)
        setSearchResults(response.data)
        console.log(response.data)
      }


    return (
        <>
            <div className="flex gap-3">
                <input onKeyDown={(e) => search(e)} className="text-[#616475] p-2 border border-[#e7e7eb] outline-none bg-transparent placeholder:text-[#616475] placeholder:text-base placeholder:font-medium" type="text" placeholder="Search by City" id="" />
                <button className="text-[#e7e7eb] text-base font-semibold bg-[#3C47E9] p-2">Search</button>
                <img onClick={() => setSearchGui(false)} className="absolute top-3 right-3 cursor-pointer h-8" src={close} alt="" />
            </div>
            <div className="flex flex-col w-full">
                {searchResults.length > 0 && searchResults.map(search => {
                    if (search.type === 'city') {
                        return (
                            <div onClick={() => setLocation(search.name)} className="hover:border hover:border-[#616475] hover:bg-[url('./assets/chevron_right.svg')] bg-no-repeat bg-right p-4 cursor-pointer text-[#e7e7eb] text-base font-medium" key={search.id}>
                                <p>{search.name}, {search.state_name}</p>
                                <span>{search.country_name}</span>
                            </div>
                        )
                    }
                    }).slice(0,6)}
            </div>
        </>
    )
}