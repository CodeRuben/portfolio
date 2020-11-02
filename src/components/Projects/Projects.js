import React from 'react';
import './Projects.scoped.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectData } from '../../constants';

const Projects = (props) => {
  return (
    <div className="container" ref={props.elementRef}>
      <div className="wrapper">
        <h2 className="title">Recent Work</h2>
        <div className="center">
          {projectData.map((data, index) => (
            <ProjectCard 
              title={data.title} 
              subTitle={data.subTitle} 
              description={data.description} 
              screenshots={data.screenshots}
              key={index} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default React.memo(Projects);