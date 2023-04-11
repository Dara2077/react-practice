import './App.css';
import React from "react";
import Navbar from './Navbar';
import { RouterProvider, useNavigate } from 'react-router-dom';
import NewPage from './NewPage';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Different IDEs</h1>
        <button onClick={sayHello}>More Info!</button>
      </div>
      <div className="IDE">
        <h2 className = 'Name'>Replit</h2>
        <div className="info">
        <ol className = 'list'>
        <li>This is the first ever IDE I used!</li>
        <li>I mainly coded in Python using it</li>
        <li>Is web based, so it's pretty convenient</li>
        </ol>
        </div>
      </div>
      <div className="IDE">
        <h2 className = 'Name'>IntelliJ</h2>
        <div className="info">
        <ol className = 'list'>
        <li>This is the IDE I use in my CSA class!</li>
        <li>I only use it for Java</li>
        <li>I often store my code on Git Hub</li>
        </ol>
        </div>
      </div>
      <div className="IDE">
        <h2 className = 'Name'>VS Code</h2>
        <div className="info">
        <ol className = 'list'>
        <li>This is what I'm using right now!</li>
        <li>I mostly use it for web development</li>
        <li>I only started using it because of CKC!</li>
        </ol>
        </div>
      </div>
      
    </div>
    <Router>
      <Routes>
        <Route path = "/" element = {<NewPage/>}/>
      </Routes>
    </Router>
  );
}

function sayHello() {
  return(
    <div className="click">
      <Link to = '/NewPage'> Going to the new page... </Link>
    </div>
  )
}

export default App;
