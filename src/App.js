import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Education from '../src/components/Education/Education';
import Experience from '../src/components/Experience/Experience';
import LinkBar from './components/LinkBar/LinkBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavigationBar />
        <LinkBar />
        <Home />
        <Experience />
      </BrowserRouter>
    </div>
  );
}

/*

        <LinkBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/education' component={Education} />
        </Switch>
*/
export default App;
