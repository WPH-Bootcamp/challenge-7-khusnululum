import About from "./components/container/About";
import FAQSection from "./components/container/FAQSection";
import FooterSection from "./components/container/FooterSection";
import FormSection from "./components/container/FormSection";
import Hero from "./components/container/HeroSection";
import IndustrySection from "./components/container/IndustrySection";
import Navbar from "./components/container/NavBar";
import OurProcess from "./components/container/OurProcess";
import PortofolioSection from "./components/container/PortofolioSection/PortofolioSection";
import ServicesSection from "./components/container/ServicesSection";
import TestimonialsSection from "./components/container/TestimonialsSection";

function App() {
  return (
    <>
      <header className="sticky top-0 w-full z-50">
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <OurProcess />
        <ServicesSection />
        <IndustrySection />
        <PortofolioSection />
        <TestimonialsSection />
        <FAQSection />
        <FormSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}

export default App;
