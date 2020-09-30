import React from 'react';
import Home from '../src/components/Home/Home';
import Education from '../src/components/Education/Education';
import Experience from '../src/components/Experience/Experience';
import Contact from '../src/components/Contact/Contact';
import LinkBar from './components/LinkBar/LinkBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';

function App() {
  return (
    <div className="container">
      <NavigationBar />
      <LinkBar />
      <Home />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
