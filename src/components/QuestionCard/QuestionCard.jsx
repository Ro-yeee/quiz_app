import { useEffect, useState } from 'react'
import "./QuestionCard.css"

function QuestionCard({quiz,index,setIndex,length}) {

    const [list,setList] = useState([])
    const [answer,setAnswer] = useState('')
    const [classname,setClassname] = useState("")

    useEffect(()=>{
        quiz && setList([...quiz.incorrect_answers, quiz.correct_answer])
    },[quiz])

  return (
    quiz &&
    <div className='quizCard'>
      <h2>{index+1}) {quiz.question}</h2>
      <ul className='options'>
        {
            list.map((option,index) =>(
                <li className='list'>{option}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default QuestionCard
