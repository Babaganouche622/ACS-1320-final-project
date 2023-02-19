import React from "react";
import { useLocation } from "react-router-dom";
import "./CardDetails.css";

export default function CardDetails() {
  let { state } = useLocation();
  return (
    <div className="card-details">
      {console.log(state)}
      <h2 className="name">{state.data.name}</h2>
      <p className="description">{state.data.description}</p>
      <img className="image" src={state.data.image} alt={state.data.name} />
      <table className="stats">
        <h2>Base Stats</h2>
        <h3>Attack:</h3>
        {state.data.attack.map((key) => 
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
        <h3>Defence:</h3>
        {state.data.defence.map((key) => 
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
        <h3>Required Attributes:</h3>
        {state.data.requiredAttributes.map((key) => 
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
        <h3>Scales With:</h3>
        {state.data.scalesWith.map((key) => 
          <tr>
            <td>{key.name}</td>
            <td>{key.amount}</td>
          </tr>
        )}
      </table>
    </div>
  );
}
