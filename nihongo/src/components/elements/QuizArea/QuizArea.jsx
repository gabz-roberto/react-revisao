import React from 'react'

import './QuizArea.css'

const QuizArea = (props) => {
  return (
    <section className='quiz-area'>
        {props.children}
    </section>
  )
}

export default QuizArea