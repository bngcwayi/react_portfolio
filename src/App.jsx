import "./App.css";

import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import "./App.css";
import { Slideshow } from "./components/Slideshow";
import { Slides } from "./data/CarouselData.json";

function App() {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Slideshow data={Slides} />
    </div>
  );
}

export default App;
