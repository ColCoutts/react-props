import React from 'react';
import Dog from '../components/Dog';
import Header from '../components/Header';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="jeff" age={5} weight="lots!"/>
    </>
  );
}
