import { motion } from "framer-motion";
import { Code2, Rocket } from "lucide-react";

export default function Stats() {
  return (
    <div className="mt-10 space-y-10 max-w-3xl">

      {/* QUOTE BLOCK */}
      <motion.blockquote
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pl-6 italic text-lg leading-relaxed text-[var(--text-muted)]"
      >
        <span className="absolute left-0 top-1 h-full w-[3px] bg-[var(--accent)] rounded-full" />
        “I believe in what I can learn to do, not just in what I can already do.”
      </motion.blockquote>

      {/* STATS CARDS */}
      <div className="flex gap-6">

        {/* Experience Card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[var(--card-bg)] backdrop-blur-lg border border-[var(--border)]
          rounded-xl px-5 py-4 flex items-center gap-4 min-w-[180px]
          shadow-lg hover:shadow-[var(--accent)]/20 transition-all"
        >
          <Code2 className="text-[var(--accent)]" size={22} />
          <div>
            <h3 className="text-xl font-semibold text-[var(--text)]">2+</h3>
            <p className="text-[var(--text-muted)] text-xs tracking-wide">
              Years Experience
            </p>
          </div>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[var(--card-bg)] backdrop-blur-lg border border-[var(--border)]
          rounded-xl px-5 py-4 flex items-center gap-4 min-w-[200px]
          shadow-lg hover:shadow-[var(--accent)]/20 transition-all"
        >
          <Rocket className="text-[var(--accent)]" size={22} />
          <div>
            <h3 className="text-xl font-semibold text-[var(--text)]">5+</h3>
            <p className="text-[var(--text-muted)] text-xs tracking-wide">
              Projects Worked On
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
