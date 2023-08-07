import logo from '../../assets/logo.svg'
import { useState } from 'react'
import { Location } from './Location'
import { Guests } from './Guests'
import { Search } from './Search'
import close from '../../assets/close.svg'

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

    function handleCloseMenu() {
        setMenuLocation(false)
        setMenuGuests(false)
    }

    return (
        <header className={`${menuLocation || menuGuests ? 'justify-center h-auto fixed bg-white top-0 left-0 shadow-2xl px-12' : 'justify-between'} max-sm:flex-col max-sm:items-start max-sm:gap-8 pt-4 flex w-full items-center mb-10`}>
            <div className='max-sm:flex max-sm:justify-between max-sm:w-full max-sm:items-center'>
                {menuLocation || menuGuests ? <p className='max-sm:text-[#333333] sm:hidden max-sm:text-xs max-sm:font-bold'>Edit your search</p> : <img className={`${menuLocation || menuGuests ? 'hidden' : ''}`} src={logo} alt="logo do site" />}
                {menuLocation || menuGuests ? <img onClick={handleCloseMenu} className='h-6 sm:hidden' src={close} alt="close menu" /> : ''}
            </div>
            <div className={`${menuLocation || menuGuests ? 'w-full grid-cols-3 max-sm:grid-rows-max-contennt-4 max-sm:gap-6 max-sm:grid-cols-1' : 'grid-cols-max-content-3 py-4 shadow-[#0000001a] shadow-sm rounded-2xl bg-white max-sm:self-center max-sm:shadow-lg'} grid items-center justify-center`}>
                <Location handleLocation={handleLocation} menuLocation={menuLocation} menuGuests={menuGuests} location={location} setLocation={setLocation}/>
                <Guests handleGuests={handleGuests} menuGuests={menuGuests} menuLocation={menuLocation} guests={guests} setGuests={setGuests}/>
                <Search setMenuGuests={setMenuGuests} setMenuLocation={setMenuLocation} handleSearch={handleSearch} menuLocation={menuLocation} menuGuests={menuGuests} guests={guests} location={location}/>
            </div>
        </header>
    )
}