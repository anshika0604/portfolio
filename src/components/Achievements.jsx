import { FaTrophy, FaMedal, FaExternalLinkAlt, FaBook } from "react-icons/fa";

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-28">

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center">
        My <span className="text-cyan-400">Achievements</span>
      </h2>
      <p className="text-center text-gray-400 mt-3">
        Publications, honours, and awards that highlight my academic and technical journey.
      </p>

      {/* Publications */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold flex items-center gap-2 text-cyan-300">
          <FaBook /> Publications
        </h3>

        <div className="mt-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition">
          <h4 className="text-lg font-semibold">
            Blockchain Forensics In Disaster Management
          </h4>
          <p className="text-sm text-gray-400 mt-2">
            Published in IEEE (Nov 21, 2024). This research explores blockchain forensic techniques,
            digital evidence integrity, OSINT frameworks, and a blockchain-based system model for
            post-disaster response to improve transparency and resilience.
          </p>

          <a
            href="https://ieeexplore.ieee.org/document/11059026"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 text-sm"
          >
            View Publication <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* Honors & Awards */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold flex items-center gap-2 text-cyan-300">
          <FaTrophy /> Honors & Awards
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          {/* Gold Medal */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <FaMedal className="text-yellow-400" /> Gold Medalist
            </h4>
            <p className="text-sm text-gray-400 mt-2">
              Issued by Government Doon University (Oct 2023). Achieved Gold Medal in
              BSc (Hons) Computer Science Batch 2019–2022 for outstanding academic performance.
            </p>
          </div>

          {/* Hackathon */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition">
            <h4 className="text-lg font-semibold">
              🥇 IdeathonX 1.0 Hackathon Winner
            </h4>
            <p className="text-sm text-gray-400 mt-2">
              Secured 1st place as part of Team Savior at IdeathonX 1.0 Hackathon,
              outperforming teams from four college campuses with an innovative solution.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}