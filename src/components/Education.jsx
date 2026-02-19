import { motion } from "framer-motion";

export default function EducationTimeline() {
  const education = [
    {
      year: "2022 – 2024",
      degree: "Master of Computer Applications (MCA)",
      school: "Graphic Era Deemed to be University",
      score: "CGPA: 8.84",
    },
    {
      year: "2019 – 2022",
      degree: "Bachelor of Science (Computer Honours)",
      school: "Government Doon University",
      score: "Gold Medalist • CGPA: 8.64",
    },
  ];

  return (
    <section id="education" className="py-32 relative">
      {/* Title */}
      <h2 className="experience-title text-gray-900 dark:text-white">
        Education
      </h2>

      <div className="timeline-wrapper relative mt-20">

        {/* Timeline Line */}
        <div className="timeline-line bg-gray-300 dark:bg-white/20"></div>

        {/* Cards */}
        <div className="timeline-cards">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="edu-card bg-white dark:bg-white/5
                         border border-gray-200 dark:border-white/10
                         backdrop-blur-xl"
            >
              {/* Dot */}
              <div className="edu-dot bg-cyan-500"></div>

              <span className="edu-year text-cyan-500">
                {edu.year}
              </span>

              <h3 className="edu-degree text-gray-900 dark:text-white">
                {edu.degree}
              </h3>

              <p className="edu-school text-gray-700 dark:text-gray-300">
                {edu.school}
              </p>

              <p className="edu-score text-gray-600 dark:text-gray-400">
                {edu.score}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
