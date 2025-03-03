import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth/auth-index'
import Dashboard from './pages/dashboard/dashboard-index'
import Onboarding from './pages/onboarding/onboarding-index'
import ListEntire from './pages/list-entire/list-entire-index'
import ListToday from './pages/list-today/list-today-index'
import PrayerSession from './pages/list-today/prayer-session-index'
import Settings from './pages/settings/settings-index'
import { useState } from 'react'
import { useEffect } from 'react'
import { useGetData } from './hooks/useGetData'
import { useCalcListToday } from './hooks/useCalcListToday'
import Message from './components/Message'
import { useGetUserInfo } from './hooks/useGetUserInfo'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase-config'


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
        <Routes>
          <Route path="/" exact element={<Auth setBoxData={setBoxData} setIsLoading={setIsLoading}/>}/>
          <Route path="/onboarding" element={<Onboarding isAuth={isLoggedIn} setBoxData={setBoxData} setIsLoading={setIsLoading}/>} />
          <Route path="/dashboard" element={<Dashboard isAuth={isLoggedIn} boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path="/list-entire" element={<ListEntire isAuth={isLoggedIn} boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading} setMessage={setMessage} setMessageType={setMessageType}/>} />
          <Route path="/list-today" element={<ListToday isAuth={isLoggedIn} listToday={listToday} isLoading={isLoading} setIsLoading={setIsLoading} setMessage={setMessage} setMessageType={setMessageType}/>} />
          <Route path="/prayer-session" element={<PrayerSession isAuth={isLoggedIn} listToday={listToday} isLoading={isLoading} setIsLoading={setIsLoading} setMessage={setMessage} setMessageType={setMessageType}/>} />
          <Route path="/settings" element={<Settings isAuth={isLoggedIn}/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
