import "./App.css";
import About from "./component/about/About";
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
    </div>
  );
}

export default App;
