import "./App.css";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Portfolio from "./component/portfolio/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
