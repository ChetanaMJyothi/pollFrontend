import React, { useState } from 'react'
import PollForm from './PollForm'
import style from './PollCreate.module.css';
const PollCreate = () => {
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const createHandler = () => {
    setIsDisplayForm(!isDisplayForm);
  }
  return (
    <div className={style.form_main}>
      <h1>Create Poll </h1>
      <h2>Formulate a captivating question and construct a poll to gain insights into people's preferences and choices.</h2>
      <button type='button' onClick={createHandler}>Create Poll +</button>
      {isDisplayForm && <PollForm onClose={createHandler} />}
    </div>
  )
}

export default PollCreate
