import React from 'react'
function stats(tickets){
  const total = tickets.length
  const open = tickets.filter(t=>t.status==='open').length
  const inprog = tickets.filter(t=>t.status==='in_progress').length
  const closed = tickets.filter(t=>t.status==='closed').length
  return {total,open,inprog,closed}
}
export default function Dashboard(){
  const raw = localStorage.getItem('ticketapp_tickets') || '[]'
  const tickets = JSON.parse(raw)
  const s = stats(tickets)
  function logout(){ localStorage.removeItem('ticketapp_session'); window.location.href='/' }
  return (<div>
    <h2>Dashboard</h2>
    <div className="stats">
      <div className="card">Total <strong>{s.total}</strong></div>
      <div className="card">Open <strong>{s.open}</strong></div>
      <div className="card">In Progress <strong>{s.inprog}</strong></div>
      <div className="card">Closed <strong>{s.closed}</strong></div>
    </div>
    <div style={{marginTop:20}}><a className="btn" href="/tickets">Manage Tickets</a> <button className="btn ghost" onClick={logout}>Logout</button></div>
  </div>)
}