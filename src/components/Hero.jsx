import Stats from "./Stats";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-20">
        <ParticlesBackground />
        <div className="absolute inset-0 flex items-center">
            <div className="w-[500px] h-[500px] bg-cyan-500/30 blur-[180px] rounded-full translate-x-[200px] -translate-y-[50px]" />
          </div>
      <div className="max-w-7xl w-[94%] mx-auto px-7">

        <p className="text-cyan-400 tracking-widest text-sm mb-4">
          ✨ WELCOME TO MY WORLD
        </p>

        <h1 className="text-[72px] font-bold leading-tight tracking-tight text-white">
          Hi, I'm <span className="text-cyan-400">Anshika</span>
        </h1>

        <h2 className="text-3xl text-gray-300 mt-4 font-light">
          Software Developer
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed">
          I craft exceptional digital experiences through clean code and creative
          solutions. From web apps to mobile and games, I bring ideas to life.
        </p>

        {/* Stats */}
        <Stats />

        {/* Buttons */}
        <div className="mt-12 flex items-center gap-6">
          <a
            href="#about"
            className="px-6 py-3 bg-cyan-500 text-black rounded-xl text-sm font-medium
            hover:bg-cyan-400 hover:scale-105 transition-all shadow-lg shadow-cyan-500/30"
          >
            View Details
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 text-white rounded-xl text-sm
            hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all"
          >
            Let’s Talk
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 text-s tracking-widest animate-bounce">
          <span>SCROLL</span>
          <svg className="w-4 h-4 mt-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>

      </div>
    </section>
  );
}
