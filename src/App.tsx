import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
