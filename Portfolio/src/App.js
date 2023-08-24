import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App ">
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Projects/>
    <Contacts/>
    <Footer/>
    </div>
  );
}

export default App;
