import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portofolio";
import Contact from "./components/contact";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: true,    // animasi hanya sekali saat scroll
      offset: 50,    // jarak trigger animasi
    });
  }, []);



  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f] text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <SocialIcons />
        <Footer />
      </main>
    </div>
  );
}

export default App;
