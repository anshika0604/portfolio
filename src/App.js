import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SocialBar from "./components/SocialBar";
import WhatICreate from "./components/WhatICreate";
import DownloadCV from "./components/DownloadCV";
import Achievements from "./components/Achievements";
import MeteorShower from "./components/MeteorShower";

import './App.css';

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const [meteorTrigger, setMeteorTrigger] = useState(false);

  const triggerMeteors = () => {
    setMeteorTrigger(prev => !prev); // safe toggle
  };

  return (
    <div className="bg-noise relative min-h-screen">

      {/* Gradient Blobs */}
      <div className="bg-blob blob-blue"></div>
      <div className="bg-blob blob-purple"></div>

      {/* Grid Overlay */}
      <div className="bg-grid"></div>
      <div className="glow-line"></div>

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[120px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl z-40 pointer-events-none" />

      <Navbar triggerMeteors={triggerMeteors} />

      {/* Meteor Effect */}
      <MeteorShower trigger={meteorTrigger} />

      <main className="relative z-10">
        <Hero />
        <SocialBar theme={theme} setTheme={setTheme} />
        <WhatICreate />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <DownloadCV />
        <Footer />
      </main>
    </div>
  );
}