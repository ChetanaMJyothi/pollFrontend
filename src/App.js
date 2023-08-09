import './App.css';
import Layout from './components/Layout';
import { saveUserId, loginUser, saveUserToken } from './Redux/validSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
  const storedToken = JSON.parse(localStorage.getItem('userData'));
  console.log("stored userID",storedToken.userID)
  console.log("stored token", storedToken.token)
 
  if(storedToken){
  dispatch(saveUserId(storedToken.userID));
  dispatch(saveUserToken(storedToken.token));
  dispatch(loginUser(true));
  }
},[])
  return (
    
    <div className="App">
      <Layout/>
    </div>
   
  );
}

export default App;
