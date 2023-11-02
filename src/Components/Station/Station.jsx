import React, { useState, useEffect } from 'react';
import './Station.css';
import { stations } from '../../data/stationData';

function Station() {
  const categories = ['address', 'lines', 'stationNumber'];
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="station-container">
      <div className="clock">{currentTime}</div>
      <div className="select-container">
        <select className="category-select">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="station-list">
        {stations.map((station, index) => (
          <div key={index} className="station-item">
            <div className="station-street">{station.street}</div>
            <div className="station-details">
              <div className="station-address">{station.address}</div>
              <div className="station-lines">{station.lines}</div>
              <div className="station-number">Station Number: {station.stationNumber}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Station;