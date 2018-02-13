import React from 'react';

import './App.css';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header counter={2} openCart={() => {}} />
  </div>
);

export default App;
