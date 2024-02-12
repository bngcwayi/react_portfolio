import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import { Slideshow } from "./components/Slideshow";
import { Slides } from "./data/CarouselData.json";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Slideshow data={Slides} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
