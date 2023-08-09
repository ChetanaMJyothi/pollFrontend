import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Bargraph from '../Graph/Bargraph';
import { Link, Outlet } from 'react-router-dom';
import style from  './PollResult.module.css'
const PollResult = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://wandering-slippers-fawn.cyclic.app/api/poll/results',
    })
      .then(function (response) {
        console.log(response.data);
        setResults(response.data.allId)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    results.map((item, index) => {
      console.log(item.option1.voteCount)
      return (
        <div className={style.result_graph}>
          <div className={style.result_text}>
          <h2>{item.question}</h2>
          <p>Option-1: {item.option1.content} ,<span className={style.Span_ele}>Number of votes: {item.option1.voteCount}</span> </p>
          <p>Option-2: {item.option2.content} , <span className={style.Span_ele}>Number of votes: {item.option2.voteCount}</span> </p>
          <p>Option-3: {item.option3.content} , <span className={style.Span_ele}>Number of votes: {item.option3.voteCount}</span> </p>
          <p>Option-4: {item.option4.content} ,<span className={style.Span_ele}> Number of votes: {item.option4.voteCount}</span> </p>
          </div>
          <Bargraph count={index + 1} question={item.question} data={[{ option: "option-1", count: item.option1.voteCount }, { option: "option-2", count: item.option2.voteCount }, { option: "option-3", count: item.option3.voteCount }, { option: "option-4", count: item.option4.voteCount }
          ]} />

        </div>
      )
    })

  )
}
{/* <Bargraph data={[{option:"option-1", count: item.option1}, {option:"option-2", count: item.option2},{option:"option-3", count: item.option3},{option:"option-4", count: item.option4}
        ]} /> */}
export default PollResult
