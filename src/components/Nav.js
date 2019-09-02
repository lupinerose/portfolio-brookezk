import React from 'react';
import PropTypes from 'prop-types';

export default function Nav(props) {
  console.log(props.active)
  return (
    <div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

Nav.propTypes = {
  active: PropTypes.string
};
