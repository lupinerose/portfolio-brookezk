import React from 'react';

export default function Stack() {
  
  return (
    <div>
      <div className="stackGrid">
        <div className="gridChild">
          <h3>Languages</h3>
          <ul>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="gridChild">
          <h3>Frameworks</h3>
          <ul>
            <li>Angular</li>
          </ul>
        </div>
        <div className="gridChild">
          <h3>Databases</h3> 
          <ul>
            <li>PhPMyAdmin</li>
          </ul>
        </div>
        <div className="gridChild">
          <h3>Hosting</h3> 
          <ul>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="gridChild">
          <h3>Design/Styling</h3>
          <ul>
            <li>Figma</li>
          </ul>
        </div>
        <div className="gridChild">
          <h3>Work Flow</h3>
          <ul>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
