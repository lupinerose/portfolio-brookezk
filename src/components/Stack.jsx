import React from 'react';
import '../App.css';

export default function Stack() {
  
  return (
    <div>
      <div className="stackGrid">
        <div className="gridChild1">
          <h3>Front-End</h3>
            <p>Javascript ES6</p>
            <p>React</p>
            <p>React Native</p>
            <p>Redux/Saga</p>
            <p>Angular</p>
        </div>
        <div className="gridChild2">
          <h3>Back-end</h3>
            <p>C#</p>
            <p>ASP.NET</p>
            <p>Entity Framework</p>
            <p>Socket.IO</p>
            <p>Node.JS</p>
        </div>
        <div className="gridChild3">
          <h3>Databases</h3> 
            <p>MySql & MAMP</p>
            <p>Firebase & JSON</p>
            <p>Postgres & pgAdmin4</p>
        </div>
        <div className="gridChild4">
          <h3>Concepts</h3> 
            <p>Test Driven Development</p>
            <p>Behavior Driven Development</p>
            <p>RESTful Routing</p>
            <p>MVC architecture</p>
        </div>
        <div className="gridChild5">
          <h3>Design/Hosting</h3>
            <p>Figma</p>
            <p>Photopea</p>
            <p>CSS3</p>
            <p>Firebase</p>
            <p>Heroku</p>
        </div>
        <div className="gridChild6">
          <h3>Work Flow</h3>
            <p>Git</p>
            <p>Github</p>
            <p>Terminal</p>
            <p>NPM</p>
            <p>Homebrew</p>
            <p>Visual Studio Code</p>
        </div>
      </div>
    </div>
  )
}
