import React from 'react'
import { NavLink } from 'react-router-dom';
import './Title.css';

export default function Title() {
  
  return (
    <div className='title'>
      <header>
        <h1>Elden Ring</h1>
        <h3 className="Title-Subtitle">Generate information from the public Elden Ring API</h3>

        <div>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/builder">Builder</NavLink>
        </div>

      </header>
    </div>
  )
};
