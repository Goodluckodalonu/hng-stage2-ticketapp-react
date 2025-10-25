import React, {useState} from 'react'
const allowed = ['open','in_progress','closed']
function load(){ return JSON.parse(localStorage.getItem('ticketapp_tickets')||'[]') }
export default function Tickets(){
  const [tickets,setTickets]=useState(load())
  const [form,setForm]=useState({title:'',status:'open',desc:''})
  const [editing,setEditing]=useState(null)
  function save(e){ e.preventDefault(); if(!form.title){ alert('Title is required'); return } if(!allowed.includes(form.status)){ alert('Invalid status. Allowed: open, in_progress, closed'); return } let t = [...tickets]; if(editing!=null){ t[editing] = {...t[editing], ...form} } else { t.push({...form, id:Date.now()}) } setTickets(t); localStorage.setItem('ticketapp_tickets', JSON.stringify(t)); setForm({title:'',status:'open',desc:''}); setEditing(null); alert('Saved') }
  function del(i){ if(!confirm('Delete ticket?')) return; const t=[...tickets]; t.splice(i,1); setTickets(t); localStorage.setItem('ticketapp_tickets', JSON.stringify(t)) }
  function edit(i){ setEditing(i); setForm(tickets[i]) }
  return (<div>
    <h2>Tickets</h2>
    <form className="card" onSubmit={save}>
      <label>Title<input value={form.title||''} onChange={e=>setForm({...form,title:e.target.value})} /></label>
      <label>Status<select value={form.status||'open'} onChange={e=>setForm({...form,status:e.target.value})}><option>open</option><option>in_progress</option><option>closed</option></select></label>
      <label>Description<textarea value={form.desc||''} onChange={e=>setForm({...form,desc:e.target.value})}></textarea></label>
      <div><button className="btn" type="submit">{editing!=null?'Update':'Create'}</button>{editing!=null && <button type="button" className="btn ghost" onClick={()=>{setEditing(null); setForm({title:'',status:'open',desc:''})}}>Cancel</button>}</div>
    </form>
    <div className="ticket-list">
      {tickets.map((t,i)=> (
        <div key={t.id||i} className="card ticket">
          <div><strong>{t.title}</strong></div>
          <div className={"status " + t.status}>{t.status.replace('_',' ')}</div>
          <div>{t.desc}</div>
          <div className="actions">
            <button className="btn" onClick={()=>edit(i)}>Edit</button>
            <button className="btn ghost" onClick={()=>del(i)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>)
}