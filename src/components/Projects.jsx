import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Social Media Trends Tracker",
      category: "Backend",
      desc: "Android app showing real-time Instagram hashtag trends with Compose UI and backend microservices.",
      tech: "Kotlin, Jetpack Compose, Spring Boot, Kafka, PostgreSQL, Docker",
      github: "https://github.com/anshika0604/socialTrendApp",
      demo: "#",
      image: "/project1.png"
    },
    {
      title: "Android Attendance System (QR)",
      category: "Mobile",
      desc: "QR-based attendance app with Firebase realtime sync for students & faculty.",
      tech: "Java, Firebase, XML, Android SDK",
      github: "https://github.com/anshika0604/Android-Attendance-Sytem-Using-QR-Code",
      demo: "#",
      image: "/project2.png"
    },
    {
      title: "Tic-Tac-Toe Game",
      category: "Mobile",
      desc: "Multiplayer Android game with offline (local & vs computer) and online modes using Firebase game codes for cross-device play.",
      tech: "Kotlin, XML, Firebase, Realtime DB",
      github: "https://github.com/anshika0604",
      demo: "#",
      image: "/project3.png"
    },
    {
      title: "Plant Disease Detection",
      category: "ML",
      desc: "CNN-powered system detecting crop diseases from leaf images with 98% accuracy and a Flask web interface for real-time diagnosis and supplement recommendations.",
      tech: "Python, CNN, Flask, Image Processing",
      github: "https://github.com/anshika0604",
      demo: "#",
      image: "/project4.png"
    }
  ];

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28 relative">

      {/* Section Heading */}
      <h2 className="text-4xl font-semibold text-center">
        My <span className="text-cyan-400">Projects</span>
      </h2>
      <p className="text-center text-gray-400 mt-3">
        A collection of my work across mobile, backend, and system development.
      </p>

      {/* Filters */}
      <div className="flex justify-center gap-3 mt-8 flex-wrap">
        {["All", "Mobile", "Backend", "ML"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition
              ${filter === cat
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                : "border-white/10 text-gray-400 hover:border-cyan-400/40"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {filtered.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-img">
              <img src={p.image} alt={p.title} />
            </div>

            <h3 className="text-xl font-semibold mt-5">{p.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
            <p className="text-xs text-cyan-400 mt-2">{p.tech}</p>

            <div className="flex gap-3 mt-5">
              <a href={p.github} target="_blank" rel="noreferrer" className="project-btn-outline">
                <FaGithub /> GitHub
              </a>
              <a href={p.demo} target="_blank" rel="noreferrer" className="project-btn-primary">
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}