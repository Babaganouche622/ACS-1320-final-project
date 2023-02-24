import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Title from '../Title/Title';

export default function App() {
  return (
    <section className='container'>
      <Title />
      <Outlet />
    </section>
  );
}
