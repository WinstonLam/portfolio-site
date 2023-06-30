
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home'
import Resume from './components/Resume'
import Load from './components/Load'
import { Link, Element } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <Load />
      <Header />
      <div className="Content">
        <Home />

        <Element className="hero">
          <Hero />
        </Element>

        <Element className="resume">
          <Resume />
        </Element>


      </div>
    </div>
  );
}

export default App;
