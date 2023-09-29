import React from 'react';
import './Techs.css';
import Title from '../Title/Title';
import TechsItem from './TechsItem/TechsItem';
import { technologies } from '../../../utils/constants';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <Title text="Технологии" />
        <div className="techs__list-container">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__list">
            {technologies.map((technology, i) => (
              <TechsItem
                item={technology}
                key={i}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Techs;
