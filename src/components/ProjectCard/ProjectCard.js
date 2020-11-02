import React, { useState } from 'react';
import './ProjectCard.scoped.css';
import rightArrow from '../../assets/right-arrow.svg';
import leftArrow from '../../assets/left-arrow.svg';

const ArrowButton = React.memo((props) => {
  return (
    <span onClick={() => props.click()} className="arrow-container">
      <img src={props.imgSrc} alt="arrow" className="next-arrow" />
    </span>
  )
})

const ProjectCard = (props) => {
  const [imageIndex, updateImageIndex] = useState(0);

  const updateSelectedImage = () => {
    let newIndex = imageIndex === 0 ? 1 : 0;
    updateImageIndex(newIndex);
  }

  return (
    <div className="project-card">
      <div className="content">
        <ArrowButton imgSrc={leftArrow} click={updateSelectedImage} />
        <img src={props.screenshots[imageIndex]} alt="app-screenshot" className="screenshot" />
        <ArrowButton imgSrc={rightArrow} click={updateSelectedImage} />
      </div>
      <h3>{props.title}</h3>
      <p className="sub-title">{props.subTitle}</p>
      <p className="description">{props.description}</p>
    </div>
  );
} 

export default React.memo(ProjectCard);