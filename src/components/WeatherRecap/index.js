import React from 'react';
import SunCloud from '../Svgs/SunCloud';

const WeatherRecap = () => (
  <div className="weatherRecap">
    <p className="weatherRecap--from">A partir de 18:14 CEST</p>
    <div className="weatherRecap--datas">
      <div>
        <span className="weatherRecap--temp">30°</span>
        <span>Beau/Vent</span>
      </div>
      <div className="weatherRecap--right">
        <SunCloud />
        <span>- -/18°</span>
      </div>
    </div>
    <div className="weatherRecap--alert">
      <span>!</span>
      <p>Perturbations possible dues aux orages</p>
      <button type="button">2 &#62;</button>
    </div>
  </div>
);

export default WeatherRecap;
