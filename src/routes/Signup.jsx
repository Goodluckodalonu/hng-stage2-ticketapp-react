import React, {useState} from 'react'
export default function Signup(){
  const [email,setEmail]=useState(''); const [pw,setPw]=useState('')
  function submit(e){ e.preventDefault(); if(!email||!pw){ alert('Email and password required'); return } // simulate
    localStorage.setItem('ticketapp_session','token_example'); window.location.href='/dashboard' }
  return (<form className="card auth" onSubmit={submit}>
    <h2>Signup</h2>
    <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} /></label>
    <label>Password<input type="password" value={pw} onChange={e=>setPw(e.target.value)} /></label>
    <button className="btn">Create account</button>
  </form>)
}