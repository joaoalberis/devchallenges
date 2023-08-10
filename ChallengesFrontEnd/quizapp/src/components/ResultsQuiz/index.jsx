import winner from '../../assets/undraw_winners_ao2o 2.svg'

export function ResultsQuiz({score, setStartQuiz, maxQuestions}){

    function resetQuiz() {
        setStartQuiz(false)
    }

    return (
        <>
            <div className="w-full h-screen bg-[url('./assets/background.png')] flex flex-col items-center justify-center">
                <h1 className='text-[#f2f2f2] text-3xl font-bold uppercase'>Country quiz</h1>
                <div className='bg-white rounded-3xl px-16 py-14 flex flex-col gap-10 items-center'>
                    <img className='' src={winner} alt="" />
                    <p className="text-[#1d355d] text-5xl font-bold text-center">Results</p>
                    <p className="text-[#1d355d] text-lg font-normal">You got <span className="text-[#6fcf97] font-bold text-4xl">{score}</span> of <span className="text-[#6fcf97] font-bold text-4xl">{maxQuestions}</span> correct answers</p>
                    <button onClick={resetQuiz} className="text-[#1d355d] hover:bg-[#1d355d] hover:text-[#727272] px-10 py-3 font-semibold text-lg border rounded-xl border-[#1d355d]">Try again</button>
                </div>
            </div>
        </>
    )
}