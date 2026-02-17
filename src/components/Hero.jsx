import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section pt-32">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Anshika Negi
      </motion.h1>

      <p className="text-xl mt-4 text-gray-400">
        Software Developer • Android • Backend
      </p>

      <p className="subtext mt-6 max-w-xl">
        Software Developer with 1+ years of experience building production Android apps and backend APIs.
        Worked on consumer-facing apps with 10K+ DAUs, focusing on performance and clean architecture.
      </p>

      <div className="mt-8 flex gap-4">
        <a className="px-5 py-2 bg-white text-black rounded-md font-medium" href="/resume.pdf">
          Resume
        </a>
        <a className="px-5 py-2 border border-gray-700 rounded-md" href="#contact">
          Contact
        </a>
      </div>
    </section>
  );
}
