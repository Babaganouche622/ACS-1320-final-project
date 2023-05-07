import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import CardDetails from './components/CardDetails/CardDetails';
import Builder from './components/Builder/Builder';
import Home from './components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Routes>
    <Route path="/" element={<App role="main" aria-label="Main App"/>}>
      <Route path="/" element={<Home role="region" aria-label="Home Page"/>} />
      <Route path="/builder" element={<Builder role="region" aria-label="Builder Page"/>} />
      <Route path="/details/:id" element={<CardDetails role="region" aria-label="Card Details Page"/>} />
    </Route>
  </Routes>
</Router>
);
