import React from 'react';
import Hero from './components/Hero'
import Overview from './components/Overview';
import Management from './components/Management';
import Info from './components/Info';

function App() { 
  return (
    <div className='w-full'>
      <Hero/>
      <Overview/>
      <Management/>
      <Info/>
    </div>
  );
}

export default App;