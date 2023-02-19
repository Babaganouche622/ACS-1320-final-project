import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ data }) {
  return (
    <div className="card">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <img src={data.image} alt={data.name} />
        <Link 
        to={`/details/${data.id}`}
        state={{ data }}
        >
          <button>Details</button>
        </Link>
    </div>
  );
}
