import React from "react";
import { useLocation } from "react-router-dom";
import "./CardDetails.css";

export default function CardDetails() {
  let { state } = useLocation();
  return (
    <div className="card-details" role="article" aria-label="Card Details">
      {console.log(state)}
      <h2 className="name">{state.data.name}</h2>
      <p className="description">{state.data.description}</p>
      <img className="image" src={state.data.image} alt={state.data.name} />
    </div>
    );
}
