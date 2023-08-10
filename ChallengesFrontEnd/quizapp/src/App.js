import './App.css';
import { useState } from 'react'
import { StartQuiz } from './components/StartQuiz';
import { Quiz } from './components/Quiz';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [urlRequest, setUrlRequest] = useState('')
  const [maxQuestions, setMaxQuestions] = useState()

  function handleStartQuiz() {
    const questions = document.getElementById('questions')
    const dificulty = document.getElementById('dificulty')
    if((questions.value > 0 && questions.value <=25) && dificulty.value !== 'Select Dificulty'){
      setMaxQuestions(questions.value)
      setStartQuiz(true)
      setUrlRequest(`https://opentdb.com/api.php?amount=${questions.value}&category=22&type=multiple&difficulty=${dificulty.value}`)
    }else {
      if(questions.value <= 0) questions.style.border = '1px solid red'
      if(dificulty.value === 'Select Dificulty') dificulty.style.border = '1px solid red'
    }
  }

  return (
    <>
      {!startQuiz ? <StartQuiz handleStartQuiz={handleStartQuiz} /> : <Quiz urlRequest={urlRequest} maxQuestions={maxQuestions} setStartQuiz={setStartQuiz} />}
    </>
  );
}

export default App;
