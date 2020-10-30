import React from 'react';
import './About.scoped.css';
import SkillInfo from '../SkillCard/SkillCard';
import { skillData } from '../../constants';

const Education = (props) => {
  return (
    <div className="container" ref={props.elementRef}>
      <div className="wrapper">
        <h2 className="title">About Me</h2>
        <div className="skill-container">
          {skillData.map((data, index) => <SkillInfo data={data} key={index} /> )}
        </div>
      </div>
    </div>
  )
};

export default React.memo(Education);