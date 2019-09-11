import React from 'react';
import PropTypes from 'prop-types';

export default function Nav(props) {
  let yellowGlow = {
    textShadow: "0 0 8px yellow"
  }

  let redGlow = {
    textShadow: "0 0 8px red"
  }

  let greenGlow = {
    textShadow: "0 0 8px green"
  }

  let blueGlow = {
    textShadow: "0 0 8px blue"
  }

  return (
    <div>
      <ul className="navAnchors">
        {props.activeLink === 'about' ? <li style={yellowGlow}><a className='bold' href="#about">About</a></li> : <li><a href="#about">About</a></li>}
        {props.activeLink === 'stack' ? <li style={blueGlow}><a className='bold' href="#stack">Stack</a></li> : <li><a href="#stack">Stack</a></li>}
        {props.activeLink === 'projects' ? <li style={redGlow}><a className='bold' href="#projects">Projects</a></li> : <li><a href="#projects">Projects</a></li>}
        {props.activeLink === 'contact' ? <li style={greenGlow}><a className='bold' href="#contact">Contact</a></li> : <li><a href="#contact">Contact</a></li>}
      </ul>
    </div>
  )
}

Nav.propTypes = {
  activeLink: PropTypes.string
};
