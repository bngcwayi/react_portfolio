import "./App.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import { Slideshow } from "./components/Slideshow";
import Footer from "./components/Footer";
import Slide01 from "./images/Slide01.png";
import Slide02 from "./images/Slide02.png";
import Slide03 from "./images/Slide03.png";

function App() {
  const images = [
    {
      src: Slide01,
      alt: "Slide1",
      width: 200,
    },
    {
      src: Slide02,
      alt: "Slide2",
      width: 200,
    },
    {
      src: Slide03,
      alt: "Slide3",
      width: 200,
    },
  ];
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Slideshow images={images} />
      <Footer />
    </div>
  );
}

export default App;
