import { useEffect, useState } from "react";
import start from '../../assets/undraw_adventure_4hum 1.svg'
import axios from 'axios'
import { ResultsQuiz } from "../ResultsQuiz";

export function Quiz({setStartQuiz, urlRequest, maxQuestions}) {
    const [quizResults, setQuizResults] = useState([])
    const [question, setQuestion] = useState(1)
    const [answers, setAnswers] = useState([])
    const [currentAnswer, setCurrentAnswer] = useState()
    const [correctAnswer, setCorrectAnswer] = useState()
    const [score, setScore] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [finishQuiz, setFinishQuiz] = useState(false)

    useEffect(() => {
        axios.get(urlRequest).then(response => response.data).then(data => setQuizResults(data.results))
    }, [])

    useEffect(() => {
        if (quizResults.length > 0){
            setCurrentAnswer(quizResults[question - 1].question)
            setCorrectAnswer(quizResults[question - 1].correct_answer)
            const allAnswer = [...quizResults[question - 1].incorrect_answers, quizResults[question - 1].correct_answer]
            const randomAnswers = allAnswer.sort(() => Math.random() - 0.5)
            setAnswers(randomAnswers)
        }
    }, [quizResults, question])

    function handleAnswer(e, answer) {
        if (answer === correctAnswer){
            setScore(prev => prev + 1)
            if (question < maxQuestions) {
                setQuestion(prev => prev + 1)
            }else {
                setFinishQuiz(true)
            }
        }else {
            e.target.style.background = 'red'
            document.querySelector(`[data-answer="${correctAnswer}"]`).style.background = 'green'
            setDisabled(true)
        }
    }

    function handleFinishQuest() {
        setFinishQuiz(true)
    }

    console.log(correctAnswer)

    return (
        <>
        {!finishQuiz ?
            <div className="w-full h-screen bg-[url('./assets/background.png')] flex flex-col items-center justify-center">
                <h1 className='text-[#f2f2f2] text-3xl font-bold uppercase mb-16'>Country quiz</h1>
                <p className="absolute top-5 right-5 bg-white px-4 py-3 text-[#c7c7c7] font-bold rounded-lg ">{score}</p>
                <div className='relative bg-white rounded-3xl px-8 py-14 flex flex-col gap-10'>
                    <img className='absolute -top-20 right-0' src={start} alt="" />
                    <h3 className="text-[#2f527b] text-2xl font-bold">Question {question}: {currentAnswer}</h3>
                    {answers.map((answer, index) => {
                        return (
                            <button disabled={disabled} data-answer={answer} onClick={(e) => handleAnswer(e, answer)} className={`${disabled && 'cursor-not-allowed'} cursor-pointer bg-white flex gap-6 items-center border-2 border-[#6066d0b3]  hover:bg-[#f9a826] hover:border-[#f9a826] rounded-xl px-3 py-2 hover:text-white text-[#6066d0cc] font-medium`} key={index}>
                                <span className="text-2xl ">{index + 1}</span>
                                <p className="text-lg">{answer}</p>
                            </button>
                        )
                    })}
                    {disabled && <button onClick={handleFinishQuest} className="self-end bg-orange-400 text-lg font-bold text-white py-2 px-3 rounded-xl hover:bg-orange-500">Finish</button>}
                </div>
            </div> : <ResultsQuiz maxQuestions={maxQuestions} setStartQuiz={setStartQuiz} score={score} />}
        </>
    )
}