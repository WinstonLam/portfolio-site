
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Home />
        <Hero />
        {/* div with height of 500px */}
        <div style={{ height: '500px' }}></div>
      </div>
    </div>
  );
}

export default App;
