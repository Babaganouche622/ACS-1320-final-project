import React from 'react';
import './TableRender.css';

export default function TableRender({ data }) {
  return (
    <div className='stats'>
      {console.log(data)}
      <table className='table1'>
          <h3>Attack:</h3>
        {data.attack.map((key) =>
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
      </table>
      <table className='table2'>
          <h3>Defence:</h3>
        {data.defence.map((key) =>
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
      </table>
      <table className='table3'>
          <h3>Required Attributes:</h3>
        {data.requiredAttributes.map((key) =>
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
      </table>
      <table className='table4'>
          <h3>Scales With:</h3>
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