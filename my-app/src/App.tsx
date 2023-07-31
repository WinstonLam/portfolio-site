
import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home'
import Resume from './components/Resume'
import Load from './components/Load'
import Projects from './components/Projects'
import SideLines from './components/SideLines';
import SubProjects from './components/SubProjects';
import { Link, Element } from 'react-scroll';

type Theme = {
  primary: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
};

function App() {
  const [theme, setTheme] = useState({
    primary: '4, 66, 14',
    second: '239, 238, 227',
    third: '130, 132, 86',
    fourth: '0, 116, 153',
    fifth: '255, 255, 255'
  });

  // update :root colors whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--second-color', theme.second);
    root.style.setProperty('--third-color', theme.third);
    root.style.setProperty('--fourth-color', theme.fourth);
    root.style.setProperty('--fifth-color', theme.fifth);
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };
  return (
    <div className="App">
      <Load />
      <Header />
      <SideLines />
      <div className="Content">


        <Home currentTheme={theme} changeTheme={changeTheme} />

        <Element className="hero">
          <Hero changeTheme={changeTheme} />
        </Element>

        <Element className="resume">
          <Resume />
        </Element>

        <Element className="projects">
          <Projects />
        </Element>

        <Element className="subprojects">
          <SubProjects />
        </Element>


      </div>
    </div>
  );
}

export default App;
