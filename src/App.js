import React from 'react';
import Home from '../src/components/Home/Home';
import Education from '../src/components/Education/Education';
import Experience from '../src/components/Experience/Experience';
import LinkBar from './components/LinkBar/LinkBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';

function App() {
  return (
    <div className="container">
      <NavigationBar />
      <LinkBar />
      <Home />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
