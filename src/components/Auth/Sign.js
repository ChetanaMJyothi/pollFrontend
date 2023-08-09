import React, { useRef , useState} from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { saveUserId, loginUser, saveUserToken } from '../../Redux/validSlice';
import './Auth.css';
const Sign = () => {
const [errMessage, setErrMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch()
    const nameRef =useRef();
    const emailRef =useRef();
    const passwordRef =useRef();

    const submitHandler=(e)=>{
        e.preventDefault();
       axios({
            method: 'post',
            url: 'http://localhost:3000/api/user/signup',
            data: {
              name: nameRef.current.value,
              email: emailRef.current.value,
              password: passwordRef.current.value,
            }
          })
          .then(function(response){
            console.log(response)
            console.log(response.data.userId)
            dispatch(saveUserId(response.data.userId))
            dispatch(saveUserToken(response.data.token));

            navigate('/main');
          })
          .catch((error)=>{
            console.log(error);
            setErrMessage(error.response.data.message);

          })
    }
    const signUpHandler= ()=> {
      navigate('/')
    }
    const errMsgHandler =()=>{
      setErrMessage('')
    }
  return (
    <div className='background'>
    <div className="login">
    <h2 className="nonactive" onClick={signUpHandler}>Sign In</h2>
    <h2 className="active" >Sign Up</h2>
    <form className='formEle' onSubmit={submitHandler}>
    <input type="text" ref={nameRef} className="text" placeholder='Full Name' name="username" onChange={errMsgHandler} />
       <span className='label'>Username</span>
      <input type="email"  ref={emailRef} className="text" placeholder='abcd@gmail.com' name="useremail" onChange={errMsgHandler}/>
       <span className='label'>Email</span>
      <br></br>
      <br></br>
      <input type="password"  ref={passwordRef} className="text" name="password" />
      <span className='label'>Password</span>
      <br></br>
      {errMessage &&<p className='errColor'>{errMessage}</p>}
      <button className="signin">
        Sign In
      </button>
     
    </form>
  </div>
  </div>
  )
}

export default Sign
