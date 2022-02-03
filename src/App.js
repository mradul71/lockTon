import './App.css';
import Login from './components/Login'
import {Route, Routes} from 'react-router-dom'
import SpreadSheet from './components/SpreadSheet';
import Home from './components/Home';
import { useState } from 'react';

function App() {

  const [flag, setFlag] = useState(false);

  return (
    <div className="App">
      {!flag && <Login setFlag={setFlag} />}
      {flag && <Home />}
    </div>
  );
}

export default App;
