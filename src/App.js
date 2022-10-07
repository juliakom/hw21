import './App.css';
import React from 'react';

import { Greetings } from './components/Greetings';
import { Card} from './components/Cards';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to='/'> Greetings </Link>
          <Link to='cards'> Cards </Link>
          <Routes>
            <Route path="/" element={<Greetings name='World' />} />
            <Route path="cards" element={<Card/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;