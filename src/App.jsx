import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import { testimonials } from "./data/content";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {testimonials.length > 0 && (
        // Testimonials section intentionally omitted until you have real ones —
        // see data/content.js for notes on why.
        null
      )}
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
