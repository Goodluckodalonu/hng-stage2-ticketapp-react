import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Landing from './routes/Landing.jsx'
import Login from './routes/Login.jsx'
import Signup from './routes/Signup.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Tickets from './routes/Tickets.jsx'

const requireAuth = (Component) => {
  return () => {
    const token = localStorage.getItem('ticketapp_session')
    if (!token) return <NavigateToLogin />
    return <Component />
  }
}
function NavigateToLogin(){ window.location.href='/auth/login'; return null }

export default function App(){
  return (<div className="app">
    <header className="header">
      <div className="container">
        <Link to="/">TicketApp</Link>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
        </nav>
      </div>
    </header>
    <main className="container">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Protected><Dashboard/></Protected>} />
        <Route path="/tickets/*" element={<Protected><Tickets/></Protected>} />
        <Route path="*" element={<Landing/>} />
      </Routes>
    </main>
    <footer className="footer container">© TicketApp</footer>
  </div>)
}

function Protected({children}){
  const token = localStorage.getItem('ticketapp_session')
  if(!token){
    alert('Your session has expired, please log in again.')
    window.location.href='/auth/login'
    return null
  }
  return children
}