//React Imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//CSS Imports
import './App.css';

//File Imports
import Home from './github/Files/Home';
import Repositories from './github/Files/Repositories';
import Followers from './github/Files/Followers';
import ErrorPage from './github/Files/ErrorPage';

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/Home.js/:username' element={<Home />} />
        <Route path='/Repositories.js' element={<Repositories />} />
        <Route path='/Followers.js' element={<Followers />} />
        <Route path='/ErrorPage.js' element={<ErrorPage />} />
      </Routes>
    </Router>

  );
}

export default App;
