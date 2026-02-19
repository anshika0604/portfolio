import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Music,
  Moon,
  Sun
} from "lucide-react";

export default function SocialBar({ theme, setTheme }) {

  const socials = [
    { icon: Github, label: "GitHub", link: "https://github.com/anshika0604" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/anshika-negi-621311201/" },
    { icon: SiLeetcode, label: "Leetcode", link: "https://leetcode.com/anshika_n2002/" },
    { icon: Mail, label: "Email", link: "anshikanegi.cs19@gmail.com" },
    { icon: Music, label: "Spotify", link: "#" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">

      {/* Social Icons */}
      {socials.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.15 }}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full
              bg-black/40 dark:bg-black/40 bg-white/60 backdrop-blur-xl border border-white/10
              text-gray-300 dark:text-gray-300 text-gray-700 hover:text-cyan-400
              shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <Icon size={20} />

            <span className="absolute right-14 opacity-0 group-hover:opacity-100
              translate-x-2 group-hover:translate-x-0 transition-all duration-300
              bg-black/70 dark:bg-black/70 bg-white/80 backdrop-blur-md text-xs px-3 py-1 rounded-md border border-white/10 text-white dark:text-white text-black">
              {item.label}
            </span>
          </motion.a>
        );
      })}

      {/* THEME TOGGLE BUTTON */}
      <motion.button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        whileHover={{ scale: 1.15 }}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full
          bg-black/40 dark:bg-black/40 bg-white/60 backdrop-blur-xl border border-white/10
          text-gray-300 dark:text-gray-300 text-gray-700 hover:text-yellow-400
          shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}

        <span className="absolute right-14 opacity-0 group-hover:opacity-100
          translate-x-2 group-hover:translate-x-0 transition-all duration-300
          bg-black/70 dark:bg-black/70 bg-white/80 backdrop-blur-md text-xs px-3 py-1 rounded-md border border-white/10 text-white dark:text-white text-black">
          Theme
        </span>
      </motion.button>

    </div>
  );
}
