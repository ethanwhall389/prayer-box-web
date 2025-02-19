import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth/auth-index'
import Dashboard from './pages/dashboard/dashboard-index'
import Onboarding from './pages/onboarding/onboarding-index'
import ListEntire from './pages/list-entire/list-entire-index'
import ListToday from './pages/list-today/list-today-index'
import Settings from './pages/settings/settings-index'
import { useState } from 'react'

function App() {

  return (
    <div className='h-screen bg-slate-100'>
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth/>}/>
          <Route path="/onboarding" element={<Onboarding/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/list-entire" element={<ListEntire/>}/>
          <Route path="/list-today" element={<ListToday/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
