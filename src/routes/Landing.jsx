import React from 'react'
export default function Landing(){
  return (<section className="hero">
    <div className="hero-inner">
      <h1>TicketApp</h1>
      <p>Manage tickets across projects — built with React.</p>
      <div className="cta">
        <a className="btn" href="/auth/login">Login</a>
        <a className="btn ghost" href="/auth/signup">Get Started</a>
      </div>
    </div>
    <div className="decor-circles">
      <img src="/assets/circle-large.svg" alt="decorative circle" />
      <img src="/assets/circle-small.svg" alt="decorative small circle" />
    </div>
    <div className="wave">${''}</div>
  </section>)
}