import logo from '../../assets/logo.svg'
import { useState } from 'react'
import { Location } from './Location'
import { Guests } from './Guests'
import { Search } from './Search'

export function Header({handleSearch, guests, setGuests, location, setLocation}) {
    
    const [menuLocation, setMenuLocation] = useState(false)
    const [menuGuests, setMenuGuests] = useState(false)
    

    function handleLocation(){
        setMenuGuests(false)
        setMenuLocation((prev) => !prev)
    }

    function handleGuests(){
        setMenuLocation(false)
        setMenuGuests((prev) => !prev)
    }

    return (
        <header className={`${menuLocation || menuGuests ? 'justify-center h-96 fixed bg-white top-0 left-0 shadow-2xl px-12' : 'justify-between'} flex w-full items-center`}>
            <img className={`${menuLocation || menuGuests ? 'hidden' : ''}`} src={logo} alt="logo do site" />
            <div className={`${menuLocation || menuGuests ? 'w-full grid-cols-3' : 'grid-cols-max-content-3 py-4 shadow-[#0000001a] shadow-sm rounded-2xl bg-white'} grid items-center justify-center`}>
                <Location handleLocation={handleLocation} menuLocation={menuLocation} menuGuests={menuGuests} location={location} setLocation={setLocation}/>
                <Guests handleGuests={handleGuests} menuGuests={menuGuests} menuLocation={menuLocation} guests={guests} setGuests={setGuests}/>
                <Search setMenuGuests={setMenuGuests} setMenuLocation={setMenuLocation} handleSearch={handleSearch} menuLocation={menuLocation} menuGuests={menuGuests} guests={guests} location={location}/>
            </div>
        </header>
    )
}