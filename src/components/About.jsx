import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-[1200px] mx-auto px-6 py-32 flex flex-col lg:flex-row gap-16 items-start"
    >
    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Left Title */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:w-1/3"
      >
        <p className="text-cyan-400 tracking-widest text-sm font-mono mb-3">
          ABOUT ME
        </p>

        <h2 className="text-4xl lg:text-5xl font-semibold text-white">
          Who I Am
        </h2>

        <div className="mt-6 w-16 h-[2px] bg-cyan-400" />
      </motion.div>

      {/* Right Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:w-2/3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg"
      >
        <p className="text-gray-300 leading-relaxed text-lg">
          I’m a Software Developer specializing in Android and Backend
          development. I love building scalable systems, crafting clean APIs,
          and creating reliable mobile applications with modern architectures.
        </p>

        <p className="mt-5 text-gray-400 leading-relaxed">
          My passion lies in solving real-world problems with technology,
          learning system design, and improving performance and scalability in
          production-grade applications.
        </p>

        {/* Tech Tags */}
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Java",
            "Kotlin",
            "Android",
            "Node.js",
            "Spring Boot",
            "MySQL",
            "MongoDB",
            "System Design",
            "DSA",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 rounded-lg font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
