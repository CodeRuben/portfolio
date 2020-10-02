import React, { useState } from 'react';
import Home from '../src/components/Home/Home';
import Education from '../src/components/Education/Education';
import Experience from '../src/components/Experience/Experience';
import Contact from '../src/components/Contact/Contact';
import LinkBar from './components/LinkBar/LinkBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';

function App() {
  const [currentTabIndex, updateCurrentTabIndex] = useState(0);

  const tabChangeHandler = (index) => {
    console.log(index);
    updateCurrentTabIndex(index);
  };


  return (
    <div className="container">
      <NavigationBar />
      <LinkBar activeTabIndex={currentTabIndex} />
      <Home updateTab={() => tabChangeHandler(0)} />
      <Education updateTab={() => tabChangeHandler(1)} />
      <Experience updateTab={() => tabChangeHandler(2)} />
      <Contact updateTab={() => tabChangeHandler(3)} />
    </div>
  );
} 

export default React.memo(App);
