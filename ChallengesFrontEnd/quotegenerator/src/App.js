import './App.css';
import refresh from './assets/autorenew.svg'
import arrow from './assets/arrow.svg'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { randomQuote } from './libs/getRandomQuote';

function App() {
  const [quote, setQuote] = useState({})
  const [hover, setHover] = useState(false)
  const [random, setRandom] = useState(false)

  useEffect(() => {
    newRandomQuote()
  }, [])

  function newRandomQuote(){
    setQuote(randomQuote)
  }

  function handleQuoteHover(){
    setHover(prev => !prev)
  }

  function handleHoverRandom() {
    setRandom(prev => !prev)
  }

  return (
    <div className='w-full h-screen flex flex-col items-center py-5 px-10'>
      <header className="w-full flex justify-end">
        <button onMouseEnter={handleHoverRandom} onMouseLeave={handleHoverRandom} onClick={newRandomQuote} className="flex items-center gap-3">
          random 
          <img className={`${random && 'animate-spin'} w-5`} src={refresh} alt="" />
        </button>
      </header>
      <main className='flex flex-col gap-12 m-auto'>
        <p className='pl-16 text-center text-black font-medium text-4xl border-l-8 w-96 border-[#F7DF94]'>
          {quote.quote}
        </p>
        <Link to={`/${quote.author}`} onMouseEnter={handleQuoteHover} onMouseLeave={handleQuoteHover} className={`${hover && 'flex justify-between items-center'} hover:bg-[#333] cursor-pointer px-7 py-10`}>
          <div>
            <p className={`${hover && 'text-[#f2f2f2]'} text-[#4f4f4f]  text-2xl font-bold`}>{quote.author}</p>
            <p className='text-[#828282] text-sm font-medium'>{quote.genre}</p>
          </div>
          {hover && <img className='text-white w-8' src={arrow} alt="" />}
        </Link>
      </main>
      <footer>
        <p className='text-[#828282] font-medium text-sm'>
        created by <a className='font-bold' href="https://github.com/joaoalberis">João Alberis</a> - devChallenges.io
        </p>
      </footer>
    </div>
  );
}

export default App;
