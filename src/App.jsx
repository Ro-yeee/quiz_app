import { useEffect, useState } from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard/QuestionCard'

function App() {
  const [test,setTest] = useState([])
  const [currentindex,setCurrentIndex] = useState(0)

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
        .then(data => setTest(data.results))
  },[])

  console.log(test)
  return (
    <div className='mainContainer'>
      <QuestionCard 
        quiz={test[currentindex]} 
        index={currentindex} 
        setIndex={setCurrentIndex}
        length={test.length} />
    </div>
  )
}

export default App
