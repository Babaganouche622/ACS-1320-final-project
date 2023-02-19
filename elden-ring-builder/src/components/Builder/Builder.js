import React, { useEffect, useState } from 'react';
import CardList from "../CardList/CardList";
import './Builder.css';

const APIURL = 'https://eldenring.fanapis.com/api/'

export default function Builder() {
  const [data, setData] = useState(null);
  const [menuSelection, setMenuSelection] = useState('weapons');
  const listOfCategories = [
    'ammos',
    'armors',
    'ashes',
    'bosses',
    'classes',
    'creatures',
    'incantations',
    'items',
    'locations',
    'npcs',
    'shields',
    'sorceries',
    'spirits',
    'talismans',
    'weapons',
  ];
  useEffect(() => {
    fetch(`${APIURL}${menuSelection}?limit=2000`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [menuSelection]);

  function handleSelectChange(event) {
    setMenuSelection(`${event.target.value}`);
  }

  return (
    <div className='builder'>
      {console.log(data)}
      <select value={menuSelection} onChange={handleSelectChange}>
        {listOfCategories.map((item, key) => (
          <option value={item} key={key}>{item}</option>
        ))}
      </select>
      {console.log(data)}
      <CardList data={data} setData={setData} />
    </div>
  );
}
