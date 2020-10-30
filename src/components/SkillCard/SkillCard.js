import React from 'react';
import './SkillCard.scoped.css';

const SkillCard = (props) => {
  const data = props.data;
  return (
    <div className="card col">
      <img src={data.icon} alt="developer icon" className="dev-icon" />
      <h3>{data.title}</h3>
      <p className="desc">{data.description}</p>
      <div className="skill-icons">
        {data.skills.map((skill, index) => 
          <div className="icon" style={{background: skill.background}} key={index}>
            <img src={skill.icon} alt="skill" className="skill-icon" />
          </div>
        )}
      </div>
    </div>
  )
};

export default React.memo(SkillCard);