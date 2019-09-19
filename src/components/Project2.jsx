import React from 'react';
import pdx1 from '../assets/pdxfieldguide1.png';
import pdx2 from '../assets/pdfieldguide2.png';

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
    backgroundColor: "#589377",
    padding: 5
  }
}

export default function Project2() {
  
  return (
    <div>
      <h2 style={style.h2}><span style={style.span}>Team Project! A digital field guide to Portland's flora.</span></h2>
      <div className="flex">
        <div style={style.info}>
          <p><span className="proj1-background">&#10007; Website designed mobile-first</span></p>
          <p><span className="proj1-background">&#10007; Built in Javascript & Angular, and Materialize CSS</span></p>
          <p><span className="proj1-background">&#10007; Hosted on Firebase with their Realtime db</span></p>
          <p><span className="proj1-background">&#10007; My work: creating the JSON database object,</span></p>
          <p><span className="proj1-background">the methods to query the db, & the search function</span></p>
        </div>
        <img src={pdx1} height="400px" width="auto" alt="voces website"/>
        <img src={pdx2} height="400px" width="auto" alt="voces website"/>
      </div>
    </div>
  )
}
