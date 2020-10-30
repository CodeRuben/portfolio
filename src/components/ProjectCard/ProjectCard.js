import React from 'react';
import './ProjectCard.scoped.css';
import tracer from '../../assets/tracer.svg';
import range from '../../assets/range.svg';

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="content">
        <img src={range} alt="first" className="screen-one" />
      </div>
      <h3>Range Explorer</h3>
      <p className="sub-title">Poker training application</p>
      <p className="description">Application allows users to view preflop ranges and simulate heads up scenarios. Users also log and review session results.</p>
    </div>
  );
} 

export default React.memo(ProjectCard);