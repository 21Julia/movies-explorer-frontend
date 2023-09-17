import React from 'react';
import { Link } from 'react-router-dom';
import './TransitionButton.css';

function TransitionButton({ text, endpoint, textLink }) {
  return (
    <div className="transition-button">
      <p className="transition-button__text">{text}</p>
      <Link to={endpoint} className="transition-button__link link">{textLink}</Link>
    </div>
  );
};

export default TransitionButton;
