import { useState } from "react"
import locationImg from '../../assets/location.svg'

export function Location({handleLocation, menuLocation, menuGuests, location, setLocation}){
    

    function handleSetLocation(location){
        setLocation(location)
    }

    return (
        <>
        <div className={`${!menuLocation && 'border-[#f2f2f2] border-r-2 px-4'}`}>
            <div className={`${menuLocation && 'border-2 border-[#333] rounded-2xl px-4 py-2 text-left ' } cursor-pointer`} onClick={handleLocation}>
                {menuLocation || menuGuests ? <p className="uppercase text-[#333] text-[9px] font-extrabold">Location</p> : ''}
                <p className={`text-[#333] font-[400] text-sm`}>{location}</p>
            </div>
        </div>
        {
            menuLocation &&
                <div className='flex flex-col gap-4 order-4 py-8'>
                    <p className='text-[#4f4f4f] text-sm font-normal flex items-center gap-2 cursor-pointer' onClick={() => handleSetLocation('Helsinki, Finland')}><img className='w-8' src={locationImg} alt="" />Helsinki, Finland</p>
                    <p className='text-[#4f4f4f] text-sm font-normal flex items-center gap-2 cursor-pointer' onClick={() => handleSetLocation('Turku, Finland')}><img className='w-8' src={locationImg} alt="" />Turku, Finland</p>
                    <p className='text-[#4f4f4f] text-sm font-normal flex items-center gap-2 cursor-pointer' onClick={() => handleSetLocation('Oulu, Finland')}><img className='w-8' src={locationImg} alt="" />Oulu, Finland</p>
                    <p className='text-[#4f4f4f] text-sm font-normal flex items-center gap-2 cursor-pointer' onClick={() => handleSetLocation('Vaasa, Finland')}><img className='w-8' src={locationImg} alt="" />Vaasa, Finland</p>
                </div> 
        }
        </>
    )
}