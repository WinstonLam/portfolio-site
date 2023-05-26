
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* div with height of 500px */}
      <div style={{height: '500px'}}></div>
    </div>
  );
}

export default App;
