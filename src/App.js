import React from 'react';
import List from './components/List';
import Contacts from './components/Contacts';
import Info from './components/Info';

function App() {
  return <div className='contact'>
    <div className='contact__sidebar'>
      <List />
      <Contacts />
    </div>
    <div className='contact__names'>
      <Info />
    </div>
  </div>;
}

export default App;
