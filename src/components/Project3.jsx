import React from 'react';
import iovation from '../assets/iovation.png';

let style = {
  h2: {
    // textAlign: "center",
    marginTop: 20,
    marginLeft: "120px",
    fontSize: "30px"
  },
  info: {
    fontSize: "25px",
    fontFamily: "Bree Serif, serif",
    // backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center"
    // marginLeft: 100
  },
  span: {
    backgroundColor: "#b6c7db",
    padding: 5
  }
}

export default function Project1() {
  
  return (
    <div>
      <h2 style={style.h2}><span style={style.span}>A website clone to practice Angular</span></h2>
      <div className="flex">
        <div style={style.info}>
          <p><span className="proj1-background">&#10007; Javascript & Angular front-end</span></p>
          <p><span className="proj1-background">&#10007; Firebase hosted, realtime db implemented</span></p>
          <p><span className="proj1-background">&#10007; Routing with Angular</span></p>
        </div>
        <img src={iovation} width="600px" height="auto" alt="voces website"/>
      </div>
    </div>
  )
}
