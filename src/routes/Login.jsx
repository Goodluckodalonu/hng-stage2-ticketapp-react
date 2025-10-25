import React, {useState} from 'react'
export default function Login(){
  const [email,setEmail]=useState('test@example.com'); const [pw,setPw]=useState('Password123!')
  function submit(e){ e.preventDefault(); if(!email||!pw){ alert('Email and password required'); return } localStorage.setItem('ticketapp_session','token_example'); window.location.href='/dashboard' }
  return (<form className="card auth" onSubmit={submit}>
    <h2>Login</h2>
    <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} /></label>
    <label>Password<input type="password" value={pw} onChange={e=>setPw(e.target.value)} /></label>
    <button className="btn">Login</button>
  </form>)
}