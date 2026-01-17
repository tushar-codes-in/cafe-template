import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

