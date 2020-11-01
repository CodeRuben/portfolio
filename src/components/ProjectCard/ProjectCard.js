import React from 'react';
import './ProjectCard.scoped.css';

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="content">
        <img src={props.screenshots[screenshotIndex]} alt="app-screenshot" className="screenshot" />
      </div>
      <h3>{props.title}</h3>
      <p className="sub-title">{props.subTitle}</p>
      <p className="description">{props.description}</p>
    </div>
  );
} 

export default React.memo(ProjectCard);