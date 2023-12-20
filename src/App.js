import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import SocialLinks from './Components/SocialLinks';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
