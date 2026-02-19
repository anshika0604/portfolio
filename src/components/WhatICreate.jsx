export default function WhatICreate() {
  return (
    <section id="what-i-create" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)]">
          What I <span className="text-cyan-400">Create</span>
        </h2>

        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
          Building scalable systems and mobile experiences through clean architecture and modern tech.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          <SkillCard icon="🖥️" title="Backend" tech="Java, Spring Boot, REST APIs, Microservices, MySQL, PostgreSQL" />
          <SkillCard icon="🤖" title="Android" tech="Kotlin, Jetpack Compose, MVVM, Firebase, Clean Architecture" />
          <SkillCard icon="☁️" title="Cloud & DevOps" tech="AWS, Docker, CI/CD, Kubernetes (Basics)" />
          <SkillCard icon="💻" title="Problem Solving" tech="DSA, System Design, Competitive Programming" />

        </div>

        {/* Button */}
        <button className="mt-16 border border-cyan-400/40 px-8 py-3 rounded-full text-cyan-500 hover:bg-cyan-400/10 transition">
          About Me →
        </button>

      </div>
    </section>
  );
}

function SkillCard({ icon, title, tech }) {
  return (
    <div className="skill-card p-7 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-md transition">

      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="create-icon">{icon}</div>

        <h3 className="text-lg font-semibold text-cyan-400 tracking-wide whitespace-nowrap">
          {title}
        </h3>
      </div>

      {/* Tech stack */}
      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
        {tech}
      </p>

    </div>
  );
}
