import "./index.css";
//import animate onScroll
import Aos from "aos";
import "aos/dist/aos.css";
//import components
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import SponsorsSlider from "./components/SponsorsSlider";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
    // easing: "ease-in-out",
    // delay: 50,
    // once: "true",
    // disable: false,
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <SponsorsSlider />
      <About />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
