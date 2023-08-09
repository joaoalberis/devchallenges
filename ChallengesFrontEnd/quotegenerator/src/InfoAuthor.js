import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import refresh from './assets/autorenew.svg'
import { getQuotesByAuthor } from "./libs/getRandomQuote"

export default function InfoAuthor(){
    const {author} = useParams()
    const [quotes, setQuotes] = useState([])
    const [random, setRandom] = useState(false)

    useEffect(() => {
        setQuotes(getQuotesByAuthor(author))
    },[])

    function handleHoverRandom() {
        setRandom(prev => !prev)
    }

    return (
        <div className='w-full h-screen flex flex-col items-center py-5 px-10'>
            <header className="w-full flex justify-end">
                <a href="/" onMouseEnter={handleHoverRandom} onMouseLeave={handleHoverRandom} className='flex items-center gap-3'>
                    random 
                    <img className={`${random && 'animate-spin'} w-5`} src={refresh} alt="" />
                </a>
            </header>
            <main className='flex flex-col gap-20 mb-10'>
                <h2 className="text-4xl pl-16 font-bold text-black">{author}</h2>
                {quotes.map((quote) => {
                    return (
                        <p className='pl-16 text-black font-medium text-2xl border-l-8 w-96 border-[#F7DF94]'>
                            {quote.quote}
                        </p>
                    )
                })}
            </main>
            <footer>
                <p className='text-[#828282] font-medium text-sm'>
                created by <a className='font-bold' href="https://github.com/joaoalberis">João Alberis</a> - devChallenges.io
                </p>
            </footer>
        </div>
    )
}