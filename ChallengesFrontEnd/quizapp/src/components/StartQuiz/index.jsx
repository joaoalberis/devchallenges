import start from '../../assets/undraw_adventure_4hum 1.svg'


export function StartQuiz({handleStartQuiz}) {
    return (
        <div className="w-full h-screen bg-[url('./assets/background.png')] flex flex-col items-center justify-center">
            <h1 className='text-[#f2f2f2] text-3xl font-bold uppercase mb-16'>Country quiz</h1>
            <div className='relative bg-white rounded-3xl px-8 py-14 flex flex-col gap-10'>
                <img className='absolute -top-20 right-0' src={start} alt="" />
                <h2 className='text-center text-[#333] text-xl font-bold'>Select settings options quiz</h2>
                <div className='flex gap-4'>
                    <label htmlFor='questions' className='font-medium text-[#828282]'>Number Questions</label>
                    <input id='questions' className='shadow shadow-[#828282]' min={5} max={25} type="number" />
                </div>
                <div className='flex gap-4'>
                    <label htmlFor='dificulty' className='font-medium text-[#828282]'>Dificulty</label>
                    <select id='dificulty' className='shadow shadow-[#828282] border-0 bg-white'>
                        <option value="Select Dificulty" key="">Select Dificulty</option>
                        <option value="easy" key="">Easy</option>
                        <option value="medium" key="">Medium</option>
                        <option value="hard" key="">Hard</option>
                    </select>
                </div>
                <button onClick={() => handleStartQuiz()} className='bg-green-500 hover:bg-green-600 rounded-full py-2'>Start</button>
            </div>
        </div>
    )
}