import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

export default function CardList({ data }) {
  return (
    <div className="card-list">
      {!data ? 
      <p> Loading...</p> : 
        data.data.map((card) => (
          <Card data={card} key={card.id}/>
        ))}
    </div>
  )}
