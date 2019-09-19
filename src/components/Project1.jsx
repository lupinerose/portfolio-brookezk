import React from 'react';
import voces from '../assets/voces.png';

let style = {
  h2: {
    // textAlign: "center",
    marginLeft: "120px",
    fontSize: "30px"
  },
  info: {
    fontSize: "25px",
    fontFamily: "Bree Serif, serif",
    // backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    marginLeft: 100
  },
  span: {
    backgroundColor: "rgba(228, 180, 72)",
    padding: 10
  }
}

export default function Project1() {
  
  return (
    <div>
      <h2 style={style.h2}><span style={style.span}>A journalism website that covers Latinx issues in the United States.</span></h2>
      <div className="flex">
        <div style={style.info}>
          <p><span className="proj1-background">&#10007; Typescript & React front-end</span></p>
          <p><span className="proj1-background">&#10007; C# back-end</span></p>
          <p><span className="proj1-background">&#10007; React-Router</span></p>
          <p><span className="proj1-background">&#10007; React-Player</span></p>
        </div>
        <img src={voces} width="600px" height="auto" alt="voces website"/>
      </div>
    </div>
  )
}
