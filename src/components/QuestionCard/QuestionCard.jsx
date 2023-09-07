import { useEffect, useState } from 'react'
import "./QuestionCard.css"

function QuestionCard({quiz,answers,setAnswers,currentIndex,setIndex,length,score,setScore}) {

    const [list,setList] = useState([])

    useEffect(()=>{
        quiz && setList([...quiz.incorrect_answers, quiz.correct_answer].sort((a,b) => Math.random() - 0.5 ))
    },[quiz])

    const handlePrev = () =>{
        setIndex(currentIndex-1)
    }

    const handleNext = () =>{
        setIndex(currentIndex+1)
    }

    const handleSelect = (option) =>{
        if(!answers[currentIndex]){
            setAnswers([...answers,option])
            if(option === quiz.correct_answer)
                setScore(score+5)
            else
                setScore(score-1)
        }
        
    }

  return (
    quiz &&
    <div className='quizCard'>
      <h2>{currentIndex+1}) {quiz.question}</h2>
      <h4>Score:{score}</h4>
      <ul className='options'>
        {
            list.map((option,index) =>(
                <li 
                  className={answers[currentIndex] === option ?
                             option === quiz.correct_answer ? 
                                'correct list' : 'wrong list' : 'list'}
                  key={index}
                  onClick={()=>handleSelect(option)}>
                    {option}
                </li>
            ))
        }
      </ul>
      <div className='controls'>
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}>
            Prev
        </button>
        <button
          onClick={handleNext}
          disabled={!answers[currentIndex] || currentIndex === length-1}>
            Next
        </button>
      </div>
     {
        answers[length-1] && <h1>Quiz Finished</h1>
     }
    </div>
  )
}

export default QuestionCard
