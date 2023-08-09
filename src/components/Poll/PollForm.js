import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './PollForm.module.css'
const PollForm = (props) => {
    const [pollObj, setPollObj] = useState({});
    const navigate = useNavigate();
    const loginUser = useSelector((state) => state.poll.savedUserId)
    const loginUserToken = useSelector((state) => state.poll.savedToken)

    console.log(loginUser);
    const questionRef = useRef();
    const option_1Ref = useRef();
    const option_2Ref = useRef();
    const option_3Ref = useRef();
    const option_4Ref = useRef();

    
    const submitHandler = (e) => {
        e.preventDefault();
        setPollObj({
            question: questionRef.current.value,
            option1 : option_1Ref.current.value,
            option2 : option_2Ref.current.value,
            option3 : option_3Ref.current.value,
            option4 : option_4Ref.current.value,
            owner : loginUser,
        })
        axios({
            method: 'post',
            url: 'https://wandering-slippers-fawn.cyclic.app/api/poll',
            data:{
                question: questionRef.current.value,
                option1 : option_1Ref.current.value,
                option2 : option_2Ref.current.value,
                option3 : option_3Ref.current.value,
                option4 : option_4Ref.current.value,
                owner : loginUser,
            },
            headers: {
                'Authorization': "Bearer " + loginUserToken,
              }
          })
          .then(function(response){
            console.log(response)
            console.log(response.data.userId)
            navigate('/option');
          })
          .catch((error)=>{
            console.log(error);
          })
    }
    const closeHandler = () => {
        console.log(pollObj);
        props.onClose();
    }
    
    
    return (
        <div className={style.formStyle}>
           
         <button type="button" className={style.closeBtn} onClick={closeHandler}><i class="ri-close-circle-fill"></i></button>
            <form onSubmit={submitHandler} className={style.inputForm}>
                <label>Enter your Question </label>
                <input type="text" placeholder='Ask question' ref={questionRef} />
                <label>Options</label>
                <input type="text" placeholder='Add Option' ref={option_1Ref}/>
                <input type="text" placeholder='Add Option' ref={option_2Ref}/>
                <input type="text" placeholder='Add Option' ref={option_3Ref}/>
                <input type="text" placeholder='Add Option' ref={option_4Ref}/>

                <button type="submit" >Send Poll</button>
            </form>
          
        </div>
    )
}

export default PollForm
