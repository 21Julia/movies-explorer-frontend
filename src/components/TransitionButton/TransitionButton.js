import React from 'react';
import { Link } from 'react-router-dom';
import './TransitionButton.css';

function TransitionButton({ text, endpoint, textLink }) {
  return (
    <div className="transition__button">
      <p className="transition__text">{text}</p>
      <Link to={endpoint} className="transition__link-button link">{textLink}</Link>
    </div>
  );
};

export default TransitionButton;
