import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <div >
      <Cursor/>
      <section id="Home">
        <Navbar />
        <Home />
      </section>
      <section id="About">
        <Parallax type="about"/>
      </section>
      <section><About/></section>
      <section id="Portfolio">
        <Parallax type="portfolio"/>
      </section>
      <section className="sec"><Portfolio/></section>
    <section className="sec" id="Contact"><Contact/></section>
    </div>
  );
}

export default App;
