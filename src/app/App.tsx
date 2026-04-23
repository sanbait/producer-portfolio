import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { ResponsibilityAreas } from "./components/ResponsibilityAreas";
import { CaseStudies } from "./components/CaseStudies";
import { Experience } from "./components/Experience";
import { Strength } from "./components/Strength";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <Hero />
      <AboutMe />
      <ResponsibilityAreas />
      <CaseStudies />
      <Experience />
      <Strength />
      <Contact />
      <Footer />
    </div>
  );
}
