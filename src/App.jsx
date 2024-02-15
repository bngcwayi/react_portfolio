import "./App.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import { Slideshow } from "./components/Slideshow";
import { Slides } from "./data/CarouselData.json";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Slideshow data={Slides} />
      <Footer />
    </div>
  );
}

export default App;
