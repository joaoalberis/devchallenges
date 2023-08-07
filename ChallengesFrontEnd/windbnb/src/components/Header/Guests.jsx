import { useState } from "react"
import add from '../../assets/add.svg'
import remove from '../../assets/remove.svg'

export function Guests({handleGuests, menuGuests, menuLocation, guests, setGuests}){
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)

    function handleAdd(type){
        if(type === 'adult'){
            setAdults((prev) => prev + 1)
        }else{
            setChildren((prev) => prev + 1)
        }
        setGuests((prev) => prev + 1)
    }
    function handleRemove(type){
        if (type === 'adult'){
            if(adults > 0)  setAdults((prev) => prev - 1)
            else return
        }else {
            if(children > 0) setChildren((prev) => prev - 1)
            else return
        }
        
        setGuests((prev) => prev - 1)
    }

    return (
        <>
        <div className={`${!menuGuests && 'border-[#f2f2f2] border-r-2 px-4 max-sm:border-0'}`}>
            <div className={`${menuGuests && 'border-2 border-[#333] rounded-2xl px-4 py-2 text-left'} cursor-pointer`} onClick={handleGuests}>
                {menuGuests || menuLocation ? <p className="uppercase text-[#333] text-[9px] font-extrabold">GUESTS</p> : ''}
                {guests === 0 ? <p className="text-[#BDBDBD] border-0 outline-0">Add guests</p> : <p className="text-[#333] text-sm font-normal">{guests} guests</p>}
            </div>
        </div>
        {
            menuGuests &&
                <div className='flex flex-col gap-10 order-4 col-start-2 justify-self-start py-8 max-sm:row-start-3 max-sm:col-start-1'>
                    <div>
                        <p className="text-[#333] text-sm font-bold">Adults</p>
                        <span className="text-gray-400 text-sm font-normal">Ages 13 or above</span>
                        <div className="flex items-center gap-5 mt-4">
                            <img onClick={() => handleRemove('adult')} className="cursor-pointer rounded border border-[#828282] w-7 h-7 p-1" src={remove} alt="" />
                            <p>{adults}</p>
                            <img onClick={() => handleAdd('adult')} className="cursor-pointer rounded border border-[#828282] w-7 h-7 p-1" src={add} alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#333] text-sm font-bold">Children</p>
                        <span className="text-gray-400 text-sm font-normal">Ages 2-12</span>
                        <div className="flex items-center gap-5 mt-4">
                            <img onClick={() => handleRemove('children')} className="cursor-pointer rounded border border-[#828282] w-7 h-7 p-1" src={remove} alt="" />
                            <p>{children}</p>
                            <img onClick={() => handleAdd('children')} className="cursor-pointer rounded border border-[#828282] w-7 h-7 p-1" src={add} alt="" />
                        </div>
                    </div>
                </div> 
        }
        </>
    )
}