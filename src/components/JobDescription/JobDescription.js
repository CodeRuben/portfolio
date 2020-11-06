import React from 'react';
import './JobDescription.scoped.css';

const JobDescription = (props) => {
  const jobData = props.data;

  return (
    <div className="job-description">
      <div className="title-row">
        <h3 className="job-title">{jobData.jobTitle}</h3> 
        <p className="date-label">{jobData.dateRange}</p>
      </div>
      <p className="job-label">{jobData.company}, {jobData.location}</p>
      <ul className="work-details">
        {jobData.workDetails.map((detail, idx) => (
          <li key={idx}>{detail}</li>)
        )}
      </ul> 
      <h4 className="tech-label">Technologies</h4>
      <div className="skill-row">
        {jobData.skills.map((skill, idx) => (
          <div className="skill-block" key={idx}>{skill}</div>)
        )}
      </div>
    </div>
  )
};

export default React.memo(JobDescription);