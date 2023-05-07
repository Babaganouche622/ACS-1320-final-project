import React, { useState } from 'react';
import './Card.css';
import TableRender from '../TableRender/TableRender';



export default function Card({ data, menuSelection }) {
  const [show, setShow] = useState(false);

  function displayDetails() {
    // change stats display visibility
    if (!show) {
      console.log(show)
      setShow(true)
    } else {
      console.log(show)
      setShow(false)
    }
  }

  return (
    <div className="card" role="article">
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <img src={data.image} alt={data.name} />
      {menuSelection === 'weapons' ? <button onClick={displayDetails} aria-expanded={show}>Details</button> : null}
      { !show ? null : <TableRender data={data}/> }
    </div>
  );
}

