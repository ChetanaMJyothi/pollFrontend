import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Bargraph from '../Graph/Bargraph';
import style from './PollResult.module.css';
import './Loader.css'
const PollResult = () => {
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://helpful-tights-jay.cyclic.app/api/poll/results',
    })
      .then(function (response) {
        console.log(response.data);
        setResults(response.data.allId)
        setLoader(false)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  if (!loader) {
    return (
      results.map((item, index) => {
        console.log(item.option1.voteCount)

        return (
          <div className={style.result_graph}>
            <div className={style.result_text}>
              <h2>{index + 1}. {item.question}</h2>
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
  if (loader) {
    return (
      <span className="loader"></span>
    )
  }
}

export default PollResult
