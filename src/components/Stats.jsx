import { motion } from "framer-motion";
import { Code2, Rocket } from "lucide-react";

export default function Stats() {
  return (
    <div className="mt-10 space-y-10 max-w-3xl">

      {/* QUOTE BLOCK (ABOVE CARDS) */}
      <motion.blockquote
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pl-6 text-gray-400 italic text-lg leading-relaxed"
      >
        <span className="absolute left-0 top-1 h-full w-[3px] bg-cyan-400 rounded-full" />
        “I believe in what I can learn to do, not just in what I can already do.”
      </motion.blockquote>

      {/* STATS CARDS ROW */}
      <div className="flex gap-6">

        {/* Experience */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#070f1f]/70 backdrop-blur-lg border border-white/10
          rounded-xl px-5 py-4 flex items-center gap-4 min-w-[180px]
          shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-cyan-500/20 transition-all"
        >
          <Code2 className="text-cyan-400" size={22} />
          <div>
            <h3 className="text-xl font-semibold text-white">3+</h3>
            <p className="text-gray-400 text-xs tracking-wide">
              Years Experience
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#070f1f]/70 backdrop-blur-lg border border-white/10
          rounded-xl px-5 py-4 flex items-center gap-4 min-w-[200px]
          shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-cyan-500/20 transition-all"
        >
          <Rocket className="text-cyan-400" size={22} />
          <div>
            <h3 className="text-xl font-semibold text-white">10+</h3>
            <p className="text-gray-400 text-xs tracking-wide">
              Projects Completed
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
