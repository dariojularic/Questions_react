import { useEffect, useState } from 'react'
import './App.css'
import questions from './data'
import Question from "./Question"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1 className="header">Questions</h1>
        <ul className="questions-list">
          {questions.map(question => {
            return <Question key={question.id} {...question}/>
          })}
        </ul>
      </div>
    </>
  )
}

export default App