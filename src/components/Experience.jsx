import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Accenture",
      date: "Oct 2024 – Present",
      points: [
        "Migrating legacy APIs from Ruby/Python to Kotlin and building REST APIs with Swagger/OpenAPI.",
        "Performed performance testing and debugging integration failures during migration.",
        "Stabilized CI/CD pipelines for automated builds and deployments."
      ]
    },
    {
      role: "Android Developer Intern",
      company: "ORUphones",
      date: "Dec 2023 – Oct 2024",
      points: [
        "Improved Android UI performance by 30% through navigation and RecyclerView optimization.",
        "Integrated Firebase Analytics, Crashlytics, and Retrofit with MVVM architecture.",
        "Built battery health monitoring app with 5K+ downloads in first month."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative max-w-6xl mx-auto px-6">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-16 text-white text-center"
      >
       <h2 className="experience-title">
         Work Experience
       </h2>
      </motion.h2>

      <div className="relative border-l border-white/10 pl-10">

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="mb-16 relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[20px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

            {/* Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:border-cyan-400/40 transition">

              <h3 className="text-xl font-semibold text-white">
                {exp.role}
              </h3>

              <p className="text-cyan-400 text-sm mt-1">
                {exp.company} • {exp.date}
              </p>

              <ul className="mt-4 text-gray-400 space-y-2 text-sm leading-relaxed">
                {exp.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
