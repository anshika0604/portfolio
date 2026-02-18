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
      <h2 className="experience-title">Education</h2>

      <div className="timeline-wrapper">
        {/* Timeline Line */}
        <div className="timeline-line"></div>

        {/* Cards */}
        <div className="timeline-cards">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className="edu-card"
            >
              <div className="edu-dot"></div>

              <span className="edu-year">{edu.year}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
              <p className="edu-score">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
