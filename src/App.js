import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Project/>
    </div>
  );
}

export default App;
