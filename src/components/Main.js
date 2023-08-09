import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { saveUserId, loginUser, saveUserToken } from '../Redux/validSlice';
import { useSelector, useDispatch } from 'react-redux'
import './Main.css'
import question from './images/question.jpg';
import choose from './images/choose.jpg';
import result from './images/result.jpg'
const Main = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch()

  const optionHandler = (e) => {
    console.log(e)
    setSelectedOption(e);
    console.log(e);
    navigate(e)
  }
  const logoutHandler = (e) => {
    e.preventDefault();
    console.log("hi")
    localStorage.removeItem('userData');
    dispatch(saveUserId(""));
    dispatch(saveUserToken(""));
    dispatch(loginUser(false));
    navigate("/");
  }
  return (
    <div className='main_bg'>
      <Outlet />
      <div className='sec'  onClick={()=>optionHandler("/option/create")}>
      <button type="button" >
        <img src={question} className='btn_img' alt="create Poll" />
      </button>
      <div className='txtSec' >
        <h2>Create Poll</h2>
        <p>Formulate a captivating question and construct a poll to gain insights into people's preferences and choices.</p>
      </div>
      </div>
      <div className='sec'  onClick={()=>optionHandler("/option/list")}>
      <button type="button" >
        <img src={choose} className='btn_img' alt="create Poll" />
      </button>
      <div className='txtSec'>
        <h2>Active Poll</h2>
        <p>
          Select your preferred option in response to various questions and contribute to providing valuable insights for others seeking to understand your viewpoints.</p>
      </div>
      </div>
      <div className='sec'onClick={()=>optionHandler("/option/result")}>
      <button type="button" >
        <img src={result} className='btn_img' alt="create Poll" />
      </button>
      <div className='txtSec'>
        <h2>Get Results</h2>
        <p>View the aggregated results from all the polls and gain an understanding of the collective opinions and perspectives of others on the same questions.</p>
      </div></div>
      <button type="button" onClick={logoutHandler}>Logout</button>


    </div>
  )
}

export default Main
