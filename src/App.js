import React from 'react';
import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <div className="fixedNav">
        <Nav />
      </div>
      <div id="about" className="about container">
        <h1>Brooke Kullberg</h1>
      </div>
      <div id="stack" className="stack container">
      <h1>Stack</h1>
      </div>
      <div id="projects" className="project1 container">
        <h1>Project 1</h1>
      </div>
      <div className="project2 container">
      <h1>Project 2</h1>
      </div>
      <div className="project3 container">
        <h1>Project 3</h1>
      </div>
      <div className="project4 container">
        <h1>Project 4</h1>
      </div>
      <div id="contact" className="contact container">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default App;
