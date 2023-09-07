import { useEffect, useState } from 'react'
import "./QuestionCard.css"

function QuestionCard({quiz,answers,setAnswers,index,setIndex,length,score,setScore}) {

    const [list,setList] = useState([])
    const [disabled,setDisabled] = useState(false)

    useEffect(()=>{
        answers[index] ? setDisabled(false) : setDisabled(true)
        quiz && setList([...quiz.incorrect_answers, quiz.correct_answer])
    },[quiz,answers])

    const handlePrev = () =>{
        setIndex(index-1)
    }

    const handleNext = () =>{
        setIndex(index+1)
    }

    const handleSelect = (option) =>{
        if(!answers[index]){
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
      <h2>{index+1}) {quiz.question}</h2>
      <h4>Score:{score}</h4>
      <ul className='options'>
        {
            list.map((option,index) =>(
                <li 
                  className='list'
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
          disabled={index === 0}>
            Prev
        </button>
        <button
          onClick={handleNext}
          disabled={disabled || index === length-1}>
            Next
        </button>
      </div>
    </div>
  )
}

export default QuestionCard
