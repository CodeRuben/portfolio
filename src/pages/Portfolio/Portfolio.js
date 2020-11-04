import React, { useState, useEffect, useRef } from 'react';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import LinkBar from '../../components/LinkBar/LinkBar';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { pages } from '../../enums';

const isBetween = (current, low, high) => {
  return current >= low && current < high;
}

const Portfolio = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const [activeLink, setActiveLink] = useState(0);
  const scrollListener = (target) => {
    if (!target.current)
      return;

    const element = target.current;
    const totalHeight = element.clientHeight - element.offsetTop - (window.innerHeight);
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) 
      return setActiveLink(pages.HOME);

    if (windowScrollTop > totalHeight) 
      return setActiveLink(pages.PROJECTS);

    const scrollProgress = Math.trunc((windowScrollTop / totalHeight) * 100);
    const active = getActivePage(scrollProgress);

    if (active !== activeLink)
      setActiveLink(active);
  };

  const getActivePage = (scrollProgress) => {
    const thresholds = [25, 45, 75];

    if (isBetween(scrollProgress, 0, thresholds[0]))
      return pages.HOME;
    else if (isBetween(scrollProgress, thresholds[0], thresholds[1]))
      return pages.ABOUT;
    else if (isBetween(scrollProgress, thresholds[1], thresholds[2]))
      return pages.EXPERIENCE;
    else if (isBetween(scrollProgress, thresholds[2], 120))
      return pages.PROJECTS;
    else
      return pages.HOME;
  }
  
  useEffect(() => {
    window.addEventListener("scroll", () => scrollListener(target));
    return () => window.removeEventListener("scroll", scrollListener);
  });

  const target = React.createRef();
  return (
    <div className="container" ref={target}>
      <LinkBar 
        activeLink={activeLink} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        experienceRef={experienceRef} 
        projectsRef={projectsRef}
        contactRef={contactRef} />
      <NavigationBar elementRef={homeRef} contactRef={contactRef} />
      <Home />
      <About elementRef={aboutRef} />
      <Experience elementRef={experienceRef} />
      <Projects elementRef={projectsRef} />
      <Contact elementRef={contactRef} homeRef={homeRef} />
    </div>
  );
} 

export default React.memo(Portfolio);

