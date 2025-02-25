import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth/auth-index'
import Dashboard from './pages/dashboard/dashboard-index'
import Onboarding from './pages/onboarding/onboarding-index'
import ListEntire from './pages/list-entire/list-entire-index'
import ListToday from './pages/list-today/list-today-index'
import Settings from './pages/settings/settings-index'
import { useState } from 'react'
import { useEffect } from 'react'
import { useGetData } from './hooks/useGetData'
import Message from './components/Message'
import { useGetUserInfo } from './hooks/useGetUserInfo'


function App() {

  const {getBoxData} = useGetData();

  const [boxData, setBoxData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('error');
  const [isAuth, setIsAuth] = useState(false);

  const {isLoggedIn} = useGetUserInfo();


  useEffect(() => {
    if(isLoggedIn) {
      getBoxData(setBoxData, setIsLoading)
    }
  }, [isAuth])

  return (
    <>
    <div className='min-h-screen h-full w-full bg-slate-100'>
      {message && <Message messageText={message} messageType={messageType} timeout={1000} setMessage={setMessage}/>}
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth setBoxData={setBoxData} setIsLoading={setIsLoading} setIsAuth={setIsAuth}/>}/>
          <Route path="/onboarding" element={<Onboarding/>} />
          <Route path="/dashboard" element={<Dashboard boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path="/list-entire" element={<ListEntire boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading} setMessage={setMessage} setMessageType={setMessageType}/>} />
          <Route path="/list-today" element={<ListToday boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
