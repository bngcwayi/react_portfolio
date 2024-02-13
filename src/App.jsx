import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import { Slideshow } from "./components/Slideshow";
import { Slides } from "./data/CarouselData.json";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Slideshow data={Slides} />
      <About />
      <Projects />
      <Contact />
      <ProjectPage />
    </div>
  );
}

export default App;
