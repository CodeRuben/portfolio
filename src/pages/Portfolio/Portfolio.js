import React, { useState, useEffect, useRef } from 'react';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Contact from '../../components/Contact/Contact';
import LinkBar from '../../components/LinkBar/LinkBar';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function Portfolio() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();

  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollListener = (target) => {
    if (!target.current)
      return;

    const element = target.current;
    const totalHeight = element.clientHeight - element.offsetTop - (window.innerHeight);
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) 
      return setScrollProgress(0);

    if (windowScrollTop > totalHeight) 
      return setScrollProgress(100);

    setScrollProgress(Math.trunc((windowScrollTop / totalHeight) * 100));
  };
  
  useEffect(() => {
    window.addEventListener("scroll", () => scrollListener(target));
    return () => window.removeEventListener("scroll", scrollListener);
  });

  const target = React.createRef();
  return (
    <div className="container" ref={target}>
      <LinkBar 
        scrollProgress={scrollProgress} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        experienceRef={experienceRef} 
        contactRef={contactRef} />
      <NavigationBar elementRef={homeRef} contactRef={contactRef} />
      <Home />
      <About elementRef={aboutRef} />
      <Experience elementRef={experienceRef} />
      <Contact elementRef={contactRef} />
    </div>
  );
} 

export default React.memo(Portfolio);

