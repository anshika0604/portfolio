export default function WhatICreate() {
  return (
    <section id="what-i-create" className="py-32 px-8 relative">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What I <span className="text-cyan-400">Create</span>
        </h2>

        <p className="text-white/60 mt-4">
          Building scalable systems and mobile experiences through clean architecture and modern tech.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {/* Backend */}
          <div className="create-card">
            <div className="create-icon">
              🖥️
            </div>
            <h3>Backend Systems</h3>
            <p>Java, Spring Boot, REST APIs, Microservices, Databases</p>
          </div>

          {/* Android */}
          <div className="create-card">
            <div className="create-icon">
              🤖
            </div>
            <h3>Android Apps</h3>
            <p>Kotlin, Jetpack Compose, MVVM, Firebase, Clean Architecture</p>
          </div>

          {/* Cloud */}
          <div className="create-card">
            <div className="create-icon">
              ☁️
            </div>
            <h3>Cloud & DevOps</h3>
            <p>AWS, Docker, CI/CD, Kubernetes (Basic)</p>
          </div>

          {/* DSA */}
          <div className="create-card">
            <div className="create-icon">
              💻
            </div>
            <h3>Problem Solving</h3>
            <p>DSA, System Design, Competitive Programming</p>
          </div>

        </div>

        {/* Button */}
        <button className="mt-16 border border-cyan-400/40 px-8 py-3 rounded-full text-cyan-400 hover:bg-cyan-400/10 transition">
          About Me →
        </button>

      </div>
    </section>
  );
}
