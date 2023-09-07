import { useEffect, useState } from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard/QuestionCard'

function App() {
  const [test,setTest] = useState([])
  const [currentindex,setCurrentIndex] = useState(0)
  const [answers,setAnswers] = useState([])
  const [score,setScore] = useState(0)

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
        .then(data => setTest(data.results))
  },[])
  
  return (
    <div className='mainContainer'>
      <QuestionCard 
        quiz={test[currentindex]}
        answers={answers}
        setAnswers={setAnswers} 
        currentIndex={currentindex} 
        setIndex={setCurrentIndex}
        length={test.length}
        score={score}
        setScore={setScore} />
    </div>
  )
}

export default App
