import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import CardDetails from './components/CardDetails/CardDetails';
import Builder from './components/Builder/Builder';
import Home from './components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/details/:id" element={<CardDetails />} />
    </Route>
  </Routes>
</Router>
);
