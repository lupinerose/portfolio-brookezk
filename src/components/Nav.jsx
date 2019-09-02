import React from 'react';
import PropTypes from 'prop-types';

export default function Nav(props) {
  console.log(props.activeLink)
  let bold ={
    fontWeight: 'bold'
  }
  let link = {};
  props.activeLink === 'about' ? link = bold : link = {};
  props.activeLink === 'stack' ? link = bold : link = {};
  props.activeLink === 'projects' ? link = bold : link = {};
  props.activeLink === 'contact' ? link = bold : link = {};

  return (
    <div>
      <ul>
        <li><a className={link} href="#about">About</a></li>
        <li><a className={link} href="#stack">Stack</a></li>
        <li><a className={link} href="#projects">Projects</a></li>
        <li><a className={link} href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

Nav.propTypes = {
  activeLink: PropTypes.string
};
