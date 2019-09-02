import React from 'react';
import PropTypes from 'prop-types';

export default function Nav(props) {
  console.log(props.activeLink)
  let style = '';
  props.activeLink === 'about' ? style = 'bold' : style = '';
  props.activeLink === 'stack' ? style = 'bold' : style = '';
  props.activeLink === 'projects' ? style = 'bold' : style = '';
  props.activeLink === 'contact' ? style = 'bold' : style = '';

  return (
    <div>
      <ul>
        <li><a className={style} href="#about">About</a></li>
        <li><a className={style} href="#stack">Stack</a></li>
        <li><a className={style} href="#projects">Projects</a></li>
        <li><a className={style} href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

Nav.propTypes = {
  activeLink: PropTypes.string
};
