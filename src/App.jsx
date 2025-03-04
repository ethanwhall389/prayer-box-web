import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import { useState } from 'react'
import { useEffect } from 'react'
import { useGetData } from './hooks/useGetData'
import { useCalcListToday } from './hooks/useCalcListToday'
import Message from './components/Message'
import { useGetUserInfo } from './hooks/useGetUserInfo'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase-config'
import AnimatedRoutes from './AnimatedRoutes'


function App() {

  const {getBoxData} = useGetData();
  const {calcListToday} = useCalcListToday();

  const [boxData, setBoxData] = useState([]);
  const [listToday, setListToday] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('error');

  const {isLoggedIn} = useGetUserInfo();

  useEffect(() => {
    setListToday(calcListToday(boxData))
  }, [boxData])

  useEffect(() => {
    if(isLoggedIn) {
      getBoxData(setBoxData, setIsLoading)
    }
  }, [isLoggedIn])

  return (
    <>
    <div className='min-h-screen h-full w-full bg-slate-100'>
      {message && <Message messageText={message} messageType={messageType} timeout={1000} setMessage={setMessage}/>}
      <Router>
        <AnimatedRoutes isLoggedIn={isLoggedIn} boxData={boxData} setBoxData={setBoxData} listToday={listToday} isLoading={isLoading} setIsLoading={setIsLoading} setMessage={setMessage} setMessageType={setMessageType} />
      </Router>
    </div>
    </>
  )
}

//isLoggedIn, boxData, setBoxData, isLoading, setIsLoading, setMessage, setMessageType

export default App
