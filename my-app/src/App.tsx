
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home'
import { Link, Element } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Home />

        <Element className="hero">
          <Hero />
        </Element>


      </div>
    </div>
  );
}

export default App;
