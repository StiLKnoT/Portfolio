import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Project from './components/Project/Project';
import Blesk from './components/blesk/Blesk';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Blesk/>
    </div>
  );
}

export default App;
