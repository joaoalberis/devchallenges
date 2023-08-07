import search from '../../assets/search.svg'
import searchWhite from '../../assets/searchWhite.svg'

export function Search({handleSearch, setMenuGuests, setMenuLocation, menuLocation, menuGuests, guests, location}) {
    
    function handleClick(){
        if (location === 'Add location' && guests === 0) alert('falta informações')
        else {
            setMenuGuests(false)
            setMenuLocation(false)
            handleSearch()
        }
    }

    return (
        <button className={`${menuLocation || menuGuests ? ' rounded-2xl py-2 justify-center' : ''} border-0 bg-transparent flex items-center px-4 cursor-default`}>
            <div className={`${menuLocation || menuGuests ? 'bg-[#eb5757] rounded-2xl py-2 px-4' : ''} flex items-center cursor-pointer`} onClick={handleClick}>
                <img className="w-8" src={menuLocation || menuGuests ? searchWhite : search} alt="busca" />
                {menuLocation || menuGuests ? <p className='text-[#F2F2F2] text-sm font-bold'>Search</p> : ''}
            </div>
        </button>
    )
}