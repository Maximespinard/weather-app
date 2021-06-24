import React from 'react';
import Logo from '../../assets/icons/logo.png';
import Burger from '../Svgs/Burger';
// import Magnify from '../Svgs/Magnifiy';

/**
 * TODO: add magnify as default value
 */

const TopSection = () => (
  <header className="topSection">
    <img alt="weather-app" src={Logo} />
    <input type="text" defaultValue="Météo Elne, Pyrénnés-Orientales" />
    <span>
      <Burger />
    </span>
  </header>
);

export default TopSection;
