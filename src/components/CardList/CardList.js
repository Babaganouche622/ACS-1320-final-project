import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

export default function CardList({ data, menuSelection, searchText }) {
  return (
    <div className="card-list">
      {!data ? 
      <p> Loading...</p> : 
        data.data.filter(obj => obj.name.toLowerCase().includes(searchText.toLowerCase())).map((card) => (
          <Card data={card} key={card.id} menuSelection={menuSelection}/>
        ))}
    </div>
  )}
