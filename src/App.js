import { useEffect } from 'react';
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
import DancingMonkey from "./components/DancingMonkey";
import JumpingFrogs from "./components/JumpingFrogs";

import './App.css';

export default function App() {
  return (
    <div className="bg-noise relative min-h-screen">

      {/* Gradient Blobs */}
      <div className="bg-blob blob-blue"></div>
      <div className="bg-blob blob-purple"></div>

      {/* Grid Overlay */}
      <div className="bg-grid"></div>
      <div className="glow-line"></div>

       <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[120px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl z-40 pointer-events-none" />
      <JumpingFrogs />
      <Navbar />
      <main className="relative z-10">
      <Hero />
      <SocialBar />
      <WhatICreate />
      <DancingMonkey />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
       <Footer />
      </main>
    </div>
  );
}
