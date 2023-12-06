import React from 'react';
import './Preloader.css';

const Preloader = ({ preloaderClass }) => {
  return (
    <div className={`preloader ${preloaderClass}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader;
