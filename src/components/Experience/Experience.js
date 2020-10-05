import React from 'react';
import './Experience.scoped.css';

const Experience = (props) => {
  return (
    <div className="container wrapper" ref={props.elementRef}>
      <h2 className="title">Experience</h2>
      <div className="separator"></div>
      <div className="row">
        <div className="title-col">Work History</div>
        <div className="detail-col">
          <div className="experience-entry">
            <b>Full Stack Software Engineer</b> 1/2018 to 7/2020
            <br />
            <b>Hologic Inc., San Diego, CA</b>
            <ul className="work-details">
              <li>Worked on a commercial scale web application to work alongside Hologic diagnostic devices.</li>
              <li>Created endpoints for REST API and Websocket</li>
              <li>Responsive single page web application using Angular 4.</li>
              <li>Worked on JWT authentication system that handled user accounts of various authorization levels.</li>
              <li>Set up client-side localization infrastructure to support multiple languages.</li>
              <li>Automated load testing process that simulated maximum user workload.</li>
              <li>Used Sketch app to design mockups of different pages of the application.</li>
              <li>Involved in creating and reviewing software requirement specification documents.</li>
            </ul> 
            <b>Technologies</b>
            <div className="skill-row">
              <div className="skill-block">Angular</div> 
              <div className="skill-block">.NET Framework</div> 
              <div className="skill-block">HTML</div> 
              <div className="skill-block">SCSS</div> 
              <div className="skill-block">Typescript</div> 
              <div className="skill-block">Git</div> 
            </div>
          </div>
          <div className="experience-entry">
            <b>Software Engineer Intern</b> 6/2017 to 12/2017
            <br />
            <b>Hologic Inc., San Diego, CA</b>
            <ul className="work-details">
              <li>Developed internal tool to visualize assay definition files</li>
              <li>Collaborated with other interns to create a dashboard application to host internal tools.</li>
              <li>Frontend Angular app which connects REST API server via HTTP</li>
              <li>Designed user interface which allowed users to upload files and view most relevant information in assay files.</li>
            </ul> 
            <b>Technologies</b>
            <div className="skill-row">
              <div className="skill-block">Angular</div> 
              <div className="skill-block">.NET Core</div> 
              <div className="skill-block">HTML</div> 
              <div className="skill-block">SCSS</div> 
              <div className="skill-block">Typescript</div> 
              <div className="skill-block">PostgreSQL</div> 
              <div className="skill-block">Linux</div> 
              <div className="skill-block">WPF</div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default React.memo(Experience);