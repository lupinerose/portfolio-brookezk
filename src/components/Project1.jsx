import React from 'react';
import voces from '../assets/voces.png';

let style = {
  // textAlign: "left"
}

export default function Project1() {
  
  return (
    <div>
      <h2 style={style}>is a journalism website that covers Latinx issues in the United States.</h2>
      <div>
        <div className="flex">
          <p>HIGHTLGHTS</p>
        </div>
        <img src={voces} width="500px" height="auto" alt="voces website"/>
      </div>
    </div>
  )
}
