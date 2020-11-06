import React from 'react';
import JobDescription from '../JobDescription/JobDescription';
import { jobData } from '../../constants';
import './Experience.scoped.css';

const Experience = (props) => {
  return (
    <div className="container wrapper" ref={props.elementRef}>
      <h2 className="title">Experience</h2>
      <div className="row">
        <div className="detail-col">
          {jobData.map((job, idx) => <JobDescription data={job} key={idx} />)}
        </div>
      </div>
    </div>
  )
};

export default React.memo(Experience);