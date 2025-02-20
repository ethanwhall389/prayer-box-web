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


function App() {

  const [boxData, setBoxData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {getBoxData} = useGetData();

  useEffect(() => {
    getBoxData(setBoxData, setIsLoading)
  }, [])

  return (
    <div className='h-screen bg-slate-100'>
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth/>}/>
          <Route path="/onboarding" element={<Onboarding/>} />
          <Route path="/dashboard" element={<Dashboard boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path="/list-entire" element={<ListEntire boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path="/list-today" element={<ListToday boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
