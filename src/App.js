import React from "react";
import Navbar from './Navbar';
import { RouterProvider, useNavigate } from 'react-router-dom';
import Home from './Home';
import MoreInfo from './MoreInfo';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigator, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/Home" element = {<Home/>}/>
        <Route path = "/MoreInfo" element = {<MoreInfo/>}/>
      </Routes>
    </Router>
  );
}

export default Home;
