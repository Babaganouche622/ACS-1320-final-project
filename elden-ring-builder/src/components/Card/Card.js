import React, { useRef } from 'react';
import './Card.css';



export default function Card({ data, menuSelection }) {
  const statDisplay = useRef();

  function displayDetails() {
    // change stats display visibility
    if (data) {
      console.log(statDisplay)
      if (statDisplay.current.style.display === 'block') {
        statDisplay.current.style.display = 'none';
      } else {
        statDisplay.current.style.display = 'block';
      }
    }
  }

  return (
    <div className="card">
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <img src={data.image} alt={data.name} />
      {menuSelection === 'weapons' ? <button onClick={displayDetails}>Details</button> : null}
    </div>
  );
}

//     add a useRef to table
//     <table className="stats" ref={statDisplay}>
//       {/* <h2>Base Stats</h2>
// <h3>Attack:</h3> */}
//       {data.attack.map((key) =>
//         <tr>
//           <td>{key.name}</td>
//           <td>{key.amount}</td>
//         </tr>
//       )}
//       {/* <h3>Defence:</h3> */}
//       {data.defence.map((key) =>
//         <tr>
//           <td>{key.name}</td>
//           <td>{key.amount}</td>
//         </tr>
//       )}
//       {/* <h3>Required Attributes:</h3> */}
//       {data.requiredAttributes.map((key) =>
//         <tr>
//           <td>{key.name}</td>
//           <td>{key.amount}</td>
//         </tr>
//       )}
//       {/* <h3>Scales With:</h3> */}
//       {data.scalesWith.map((key) =>
//         <tr>
//           <td>{key.name}</td>
//           <td>{key.amount}</td>
//         </tr>
//       )}
//     </table>
