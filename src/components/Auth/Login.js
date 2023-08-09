import React,  { useRef, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { saveUserId, loginUser, saveUserToken } from '../../Redux/validSlice';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import './Auth.css';
const Login = () => {
const [errMessage, setErrMessage] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate();
    const emailRef =useRef();
    const passwordRef =useRef();
    const submitHandler=(e)=>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/user/login',
            data: {
              email: emailRef.current.value,
              password: passwordRef.current.value,
            },
           
          })
          .then(function(response){
            console.log(response)
            console.log(response.data.userId)
            dispatch(saveUserId(response.data.userId));
            dispatch(saveUserToken(response.data.token));
            localStorage.setItem(
              'userData',
              JSON.stringify({userID: response.data.userId, token: response.data.token})
            )
            navigate('/main');
          })
          .catch((error)=>{
            console.log(error);
            console.log(error.response.data.message);
            setErrMessage(error.response.data.message);
          

          })
    }
    const signUpHandler= ()=> {
      navigate('/sign')
    }
    const errMsgHandler =()=>{
      setErrMessage('')
    }
  return (
    <div className='background'>

    <div className="login">
    <h2 className="active" > Sign In</h2>
    <h2 className="nonactive" onClick={signUpHandler}> Sign Up </h2>
    <form onSubmit={submitHandler} className='formEle'>
      <input type="email"  ref={emailRef} placeholder='abcd@gmail.com' className="text" name="useremail" onChange={errMsgHandler} />
       <span className='label'>Email</span>
      <br></br>
      <br></br>
      <input type="password" ref={passwordRef} className="text" name="password" onChange={errMsgHandler}/>
      <span className='label'>Password</span>
      <br></br>
      {errMessage &&<p className='errColor'>{errMessage}</p>}
      <button type="submit" className="signin">
        Sign In
      </button>
    
    </form>
  </div></div>
  )
}

export default Login
