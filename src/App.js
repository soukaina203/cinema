import React from 'react'
import Header from './Components1/header';
import Home from './Components1/Home';
import Movies from './Components1/Movies';
import Series from './Components1/series';
import Service from './Components1/service';

function App() {
  return (
    <div className='flex flex-col md:gap-0'>
      <Header />
      <Home />
      <Service />
      <Series />
      <Movies />

    </div>
  )
}

export default App
