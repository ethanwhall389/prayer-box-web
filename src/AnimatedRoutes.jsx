import { Route, Routes } from 'react-router-dom'

import Auth from './pages/auth/auth-index'
import Dashboard from './pages/dashboard/dashboard-index'
import Onboarding from './pages/onboarding/onboarding-index'
import ListEntire from './pages/list-entire/list-entire-index'
import ListToday from './pages/list-today/list-today-index'
import PrayerSession from './pages/list-today/prayer-session-index'
import Settings from './pages/settings/settings-index'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes({isLoggedIn, boxData, setBoxData, listToday, isLoading, setIsLoading, setMessage, setMessageType}) {

    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Auth setBoxData={setBoxData} setIsLoading={setIsLoading}/>}/>
          <Route path="/onboarding" element={<Onboarding isAuth={isLoggedIn} setBoxData={setBoxData} setIsLoading={setIsLoading}/>} />
          <Route path="/dashboard" element={<Dashboard isAuth={isLoggedIn} boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path="/list-entire" element={<ListEntire isAuth={isLoggedIn} boxData={boxData} setBoxData={setBoxData} isLoading={isLoading} setIsLoading={setIsLoading} setMessage={setMessage} setMessageType={setMessageType}/>} />
          <Route path="/list-today" element={<ListToday isAuth={isLoggedIn} listToday={listToday} isLoading={isLoading} setIsLoading={setIsLoading} setMessage={setMessage} setMessageType={setMessageType}/>} />
          <Route path="/prayer-session" element={<PrayerSession isAuth={isLoggedIn} listToday={listToday} isLoading={isLoading} setIsLoading={setIsLoading} setMessage={setMessage} setMessageType={setMessageType}/>} />
          <Route path="/settings" element={<Settings isAuth={isLoggedIn}/>}/>
        </Routes>
        </AnimatePresence>
    )
}