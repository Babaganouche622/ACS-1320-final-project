import React from 'react';
import './TableRender.css';

export default function TableRender({ data }) {
  return (
    <div className='stats' aria-label="card statistics">
      {console.log(data)}
      <table className='table1' aria-label="attack statistics">
          <caption><h3>Attack:</h3></caption>
        {data.attack.map((key) =>
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
      </table>
      <table className='table2' aria-label="defense statistics">
          <caption><h3>Defence:</h3></caption>
        {data.defence.map((key) =>
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
      </table>
      <table className='table3' aria-label="required attributes statistics">
          <caption><h3>Required Attributes:</h3></caption>
        {data.requiredAttributes.map((key) =>
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
      </table>
      <table className='table4' aria-label="scales with statistics">
          <caption><h3>Scales With:</h3></caption>
        {data.scalesWith.map((key) =>
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
      </table>
    </div>
  )
}