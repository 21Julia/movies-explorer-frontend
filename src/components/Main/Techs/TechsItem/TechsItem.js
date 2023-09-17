import React from 'react';
import './TechsItem.css';

function TechsItem({ item }) {
  return (
    <li className="techs__item">
      {item}
    </li>
  );
};

export default TechsItem;
