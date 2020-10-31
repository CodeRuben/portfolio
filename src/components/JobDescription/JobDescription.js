import React from 'react';
import './JobDescription.scoped.css';

const JobDescription = (props) => {
  const jobData = props.data;

  return (
    <div className="job-description">
      <b>{jobData.jobTitle}</b> {jobData.dateRange}
      <br />
      <b>{jobData.company}, {jobData.location}</b>
      <ul className="work-details">
        {jobData.workDetails.map((detail, idx) => (
          <li key={idx}>{detail}</li>)
        )}
      </ul> 
      <b>Technologies</b>
      <div className="skill-row">
        {jobData.skills.map((skill, idx) => (
          <div className="skill-block" key={idx}>{skill}</div>)
        )}
      </div>
    </div>
  )
};

export default React.memo(JobDescription);