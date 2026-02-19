import { motion } from "framer-motion";
import {
  SiKotlin,
  SiSpringboot,
  SiAndroid,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Android", icon: <SiAndroid /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold text-[var(--text)]"
        >
          My <span className="text-cyan-500">Skills</span>
        </motion.h2>

        <p className="text-center mt-4 max-w-xl mx-auto text-[var(--text-muted)]">
          Technologies I use to build scalable backend systems and Android apps.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.06 }}
              className="rounded-xl p-6 flex flex-col items-center gap-4 backdrop-blur-xl border
                         bg-[var(--card-bg)]
                         border-[var(--border)]
                         hover:border-cyan-400/50
                         shadow-sm
                         hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]
                         transition-all"
            >
              {/* Icon */}
              <div className="text-4xl text-cyan-500">
                {skill.icon}
              </div>

              {/* Name */}
              <p className="font-medium text-sm text-[var(--text)]">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
