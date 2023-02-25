import React, { useEffect, useState } from 'react';
import CardList from "../CardList/CardList";
import './Builder.css';

const APIURL = 'https://eldenring.fanapis.com/api/' // weapons/:name?

export default function Builder() {
  const [apiData, setData] = useState(null);
  const [menuSelection, setMenuSelection] = useState('weapons');
  const [searchText, setSearchText] = useState('');
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

  // TODO: Fix code to loop until total items are reached.
  useEffect(() => {
    (async () => {
      let response = await fetch(`${APIURL}${menuSelection}?limit=100&page=${0}`);
      let data = await response.json();
      response = await fetch(`${APIURL}${menuSelection}?limit=100&page=${1}`);
      let newData = await response.json();
      data.data.push(...newData.data);
      response = await fetch(`${APIURL}${menuSelection}?limit=100&page=${2}`);
      newData = await response.json();
      data.data.push(...newData.data);
      response = await fetch(`${APIURL}${menuSelection}?limit=100&page=${3}`);
      newData = await response.json();
      console.log(newData.data)
      data.data.push(...newData.data);
      setData(data);
    })();
  }, [menuSelection]);

  function handleSelectChange(event) {
    setMenuSelection(`${event.target.value}`);
  }


  return (
    <div className='builder'>
      {console.log(apiData)}
      <div className='searchBar'>
      <select value={menuSelection} onChange={handleSelectChange}>
        {listOfCategories.map((item, key) => (
          <option value={item} key={key}>{item}</option>
        ))}
      </select>
      <input type='text' placeholder='Search...' onChange={(e) => {setSearchText(e.target.value)}}/>
      </div>
      <CardList data={apiData} menuSelection={menuSelection} searchText={searchText}/>
    </div>
  );
}
