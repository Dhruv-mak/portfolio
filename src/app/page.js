import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-white">
    {/* <div className="bg-white dark:bg-slate-800"> */}
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
