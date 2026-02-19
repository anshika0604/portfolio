import Stats from "./Stats";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-20">

      {/* Particles */}
      <ParticlesBackground />

      {/* Glow Orb */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-[500px] h-[500px] bg-[var(--accent)]/30 blur-[180px] rounded-full translate-x-[200px] -translate-y-[50px]" />
      </div>

      <div className="max-w-7xl w-[94%] mx-auto px-7">

        {/* Subtitle */}
        <p className="tracking-widest text-sm mb-4 text-[var(--accent)]">
          ✨ WELCOME TO MY WORLD
        </p>

        {/* Main Heading */}
        <h1 className="text-[72px] font-bold leading-tight tracking-tight text-[var(--text)]">
          Hi, I'm <span className="text-[var(--accent)]">Anshika</span>
        </h1>

        {/* Role */}
        <h2 className="text-3xl mt-4 font-light text-[var(--text-muted)]">
          Software Developer
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          I craft exceptional digital experiences through clean code and creative
          solutions. From web apps to mobile and games, I bring ideas to life.
        </p>

        {/* Stats */}
        <Stats />

        {/* Buttons */}
        <div className="mt-12 flex items-center gap-6">
          <a
            href="#about"
            className="px-6 py-3 bg-[var(--accent)] text-black rounded-xl text-sm font-medium
            hover:scale-105 transition-all shadow-lg shadow-[var(--accent)]/30"
          >
            View Details
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--border)] text-[var(--text)] rounded-xl text-sm
            hover:bg-[var(--card-bg)] hover:scale-105 transition-all"
          >
            Let’s Talk
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[var(--text-muted)] text-xs tracking-widest animate-bounce">
          <span>SCROLL</span>
          <svg className="w-4 h-4 mt-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>

      </div>
    </section>
  );
}
