import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './scss/style.scss';
import PostLogin from './components/Fyers/Login/PostLogin';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <h2>MainPage</h2>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/PostLogin' element={<PostLogin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
