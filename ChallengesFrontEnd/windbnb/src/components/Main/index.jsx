import stays from '../../stays.json'
import star from '../../assets/star.svg'
import { forwardRef, useImperativeHandle, useState } from 'react'

function Main({guests, location}, ref) {
    const [results, setResults] = useState([])
    
    
    
    function searchStays() {
        const [city, country] = location.split(', ')
        const filteredStays = stays.filter((stay) => {
            const matchLocation = stay.city === city || location === "Add location"
            const matchGuests = stay.maxGuests >= guests || guests === 0
            return matchLocation && matchGuests
        })
        setResults(filteredStays)
    }

    useImperativeHandle(ref, () => ({
        searchStays
    }))

    return (
        <main className="flex flex-col gap-8">
            <h2 className="font-bold text-2xl text-[#333]">Stays in Finland</h2>
            <section className={`${results.length !== 0 ? 'stays grid grid-cols-3 gap-x-16 gap-y-8 items-center justify-center' : ''}`}>
  {results.length === 0 ? <p className='text-center text-gray-400 font-bold text-lg'>Não obteve resultados</p> : results.map((value) => {
    return (
      <div className="stay flex flex-col gap-4">
        <img className="w-full h-60 rounded-3xl" src={value.photo} alt="photo of the stays" />
        <div className="flex items-center justify-between gap-2 stay-details">
          {value.superHost === true && <p className="rounded-xl border border-[#4f4f4f] p-2 text-xs font-bold text-[#4f4f4f]">SUPER HOST</p>}
          <p className="text-[#828282] font-medium text-sm">{value.type} {value.beds !== null && `. ${value.beds} beds`}</p>
          <div className="flex items-center">
            <img className="w-6 h-6" src={star} alt="rating" />
            <p className="text-[#4F4F4F] text-sm font-medium">{value.rating}</p>
          </div>
        </div>
        <p className="text-base text-[#333] font-semibold">{value.title}</p>
      </div>
    )
  })}
</section>

        </main>
    )
}

export default forwardRef(Main);