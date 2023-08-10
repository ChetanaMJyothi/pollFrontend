import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux'
import style from './PollList.module.css'
import './Loader.css'
const PollList = () => {
  const [polls, setPoll] = useState([])
  /*   const [selectedOption, setSelectedOption] = useState(''); */
  const loginUserToken = useSelector((state) => state.poll.savedToken)
  const loginUserId = useSelector((state) => state.poll.savedUserId)
  const [loader, setLoader] = useState(true);
  useEffect(() => {

    axios({
      method: 'get',
      url: 'https://inquisitive-lamb-shirt.cyclic.app/api/poll',

      headers: {
        'Authorization': "Bearer " + loginUserToken,
      }
    })
      .then(function (response) {
        console.log(response.data.allPolls);
        setPoll(response.data.allPolls)
        setLoader(false);

        console.log(response.data.allPolls[0].owner.name)
      })
      .catch((error) => {
        console.log(error);
      })
  })

  const selectRadioHandler = async (optionN, val, pollId) => {
    /*  setSelectedOption(val) */
    console.log(val);
    console.log(pollId)

    axios({
      method: 'patch',
      url: 'https://inquisitive-lamb-shirt.cyclic.app/api/poll',

      headers: {
        'Authorization': "Bearer " + loginUserToken,

      },
      data: {
        votedPollId: pollId,
        voterId: loginUserId,
        optionContent: optionN,
      }
    })
      .then(function (response) {
        console.log(response.data.allPolls);
        /* setPoll(response.data.allPolls) */
        setPoll(response.data.allPolls)
        /*  try{
           const res = await fetch('https://inquisitive-lamb-shirt.cyclic.app/api/poll')
           const resData = await res.json();
           console.log(resData);
         } */
        axios({
          method: 'get',
          url: 'https://inquisitive-lamb-shirt.cyclic.app/api/poll',

          headers: {
            'Authorization': "Bearer " + loginUserToken,
          }
        })
          .then(function (response) {
            console.log(response.data.allPolls);
            setPoll(response.data.allPolls)
            console.log(response.data.allPolls[0].owner.name)
          })
          .catch((error) => {
            console.log(error);
          })
        console.log(pollId)
        console.log(loginUserId)
        console.log(optionN)

      })
      .catch((error) => {
        console.log(error);
      })

  }
  const deleteHandler = (pollId) => {
    console.log(pollId);
    axios({
      method: 'delete',
      url: 'https://inquisitive-lamb-shirt.cyclic.app/api/poll',

      headers: {
        'Authorization': "Bearer " + loginUserToken,

      },
      data: {
        deletePollId: pollId,

      }
    })
      .then(function (response) {
        console.log(response.data);
        /* setPoll(response.data.allPolls) */
        axios({
          method: 'get',
          url: 'https://inquisitive-lamb-shirt.cyclic.app/api/poll',

          headers: {
            'Authorization': "Bearer " + loginUserToken,
          }
        })
          .then(function (response) {
            console.log(response.data.allPolls);
            setPoll(response.data.allPolls)
            console.log(response.data.userId)
          })
          .catch((error) => {
            console.log(error);
          })


      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (

    <div className={style.list_div}>
      {!loader && <div>
        <h1>List</h1>
        <h2> Select your preferred option in response to various questions and contribute to providing valuable insights for others seeking to understand your viewpoints.</h2>

        {polls.map((item, index) => {

          return (<form key={index + 1} className={style.form_sec}>
            <h2 className={style.h2tag}>{index + 1}. {item.question}</h2>
            <label htmlFor={index + "1"} className={style.label_content}>
              <input class="form-check-input" type="radio" id={index + "1"} name={"poll" + item} checked={item.option1.vote.includes(loginUserId)} value={item.option1.content} onChange={() => selectRadioHandler(1, item.option1.content, item._id)} />
              {item.option1.content}</label>
            <label htmlFor={index + "2"} className={style.label_content}>
              <input class="form-check-input" type="radio" id={index + "2"} name={"poll" + item} checked={item.option2.vote.includes(loginUserId)} value={item.option2.content} onChange={() => selectRadioHandler(2, item.option2.content, item._id)} />
              {item.option2.content}</label>
            <label htmlFor={index + "3"} className={style.label_content}>
              <input class="form-check-input" type="radio" id={index + "3"} name={"poll" + item} checked={item.option3.vote.includes(loginUserId)} value={item.option3.content} onChange={() => selectRadioHandler(3, item.option3.content, item._id)} />
              {item.option3.content}</label>
            <label htmlFor={index + "4"} className={style.label_content}>
              <input class="form-check-input" type="radio" id={index + "4"} name={"poll" + item} checked={item.option4.vote.includes(loginUserId)} value={item.option4.content} onChange={() => selectRadioHandler(4, item.option4.content, item._id)} />
              {item.option4.content}</label>
            {item.owner._id === loginUserId && <button type='button' className={style.delete_btn} onClick={() => deleteHandler(item._id)}>Delete</button>}
            <small>Created By - {item.owner.name}</small>
          </form>
          )
        })
        }</div>
      }
      {loader && <span className="loader"></span>}
    </div>
  )
}





export default PollList
