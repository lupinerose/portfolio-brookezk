import React from 'react';
import macbook from '../assets/MacbookPro.png';
import assassingif from '../assets/assassin.gif';

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
    textAlign: "center",
    marginRight: 40
    // marginLeft: 100
  },
  span: {
    backgroundColor: "#b53e3a",
    padding: 5
  },
  gif: {
    // marginTop: 100,
    zIndex: "-.5",
    position: "relative"
  },
  mac: {
    zIndex: 0,
    position: "absolute",
    right: 70,
    top: 3765
  }
}

export default function Project4() {
  
  return (
    <div>
      <h2 style={style.h2}><span style={style.span}>Team Project! A website as game master for the in-person game.</span></h2>
      <div className="flex">
        <div style={style.info}>
          <p><span className="proj1-background">&#10007; C#.NET front- and back-end</span></p>
          <p><span className="proj1-background">&#10007; MVC architecture</span></p>
          <p><span className="proj1-background">&#10007; MySQL database</span></p>
          <p><span className="proj1-background">&#10007; My work: set up db/models/migration;</span></p>
          <p><span className="proj1-background">write CRUD functions; set up</span></p>
          <p><span className="proj1-background">controllers to display correct data/view</span></p>
        </div>
        <div>
          <img style={style.gif} width="480px" height="300" src={assassingif} alt="gif of assassin website"/>
          <img style={style.mac} src={macbook} width="600px" height="auto" alt="voces website"/>
        </div>
      </div>
    </div>
  )
}
