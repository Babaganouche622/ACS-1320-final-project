import React from 'react'
import { NavLink } from 'react-router-dom';
import './Title.css';

export default function Title() {
  
  return (
    <div className='title'>
      <img className='image1' src='https://cdn.donmai.us/original/c2/19/c21965256494384c33855542ff6e455e.png' alt='chibi ranni'></img>
      {/* <img className='image2' src='https://cdn.donmai.us/original/d1/d3/d1d39a1279dd6e6c216d33e1da58b13a.jpg' alt='chibi blaidd'></img> */}
      <header className='Title-header'>
        <h1>Elden Ring</h1>
        <h3 className="Title-Subtitle">Generate information from the public Elden Ring API</h3>

        <div>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/builder">Builder</NavLink>
        </div>

      </header>
      <img className='image3' src='https://cdn.donmai.us/original/c5/c2/c5c22acf2e886fa9528952b15186efca.jpg' alt='chibi alexander'></img>
      {/* <img className='image4' src='https://64.media.tumblr.com/64dfc4a754c6376ef65efe375b5b7a87/491a25e150464f46-f3/s1280x1920/5402acddab6d21750160e272753c77c82affd7a5.jpg' alt='chibi alexander'></img> */}
    </div>
  )
};
