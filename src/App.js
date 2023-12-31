import './App.css';
import Layout from './components/Layout';
import { saveUserId, loginUser, saveUserToken } from './Redux/validSlice';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('userData'));
    if (storedToken) {
      dispatch(saveUserId(storedToken.userID));
      dispatch(saveUserToken(storedToken.token));
      dispatch(loginUser(true));
    }
  })
  return (

    <div className="App">
      <Layout />
    </div>

  );
}

export default App;
