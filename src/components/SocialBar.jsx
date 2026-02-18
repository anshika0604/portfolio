import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Music,
  Moon
} from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", link: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/" },
  { icon: Twitter, label: "Twitter", link: "https://twitter.com/" },
  { icon: Mail, label: "Email", link: "mailto:hello@yourmail.com" },
  { icon: Globe, label: "Website", link: "#" },
  { icon: Music, label: "Spotify", link: "#" },
  { icon: Moon, label: "Theme", link: "#" },
];

export default function SocialBar() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">

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
              bg-black/40 backdrop-blur-xl border border-white/10
              text-gray-300 hover:text-cyan-400 shadow-lg
              hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <Icon size={20} />

            {/* Tooltip */}
            <span className="absolute right-14 opacity-0 group-hover:opacity-100
              translate-x-2 group-hover:translate-x-0 transition-all duration-300
              bg-black/70 backdrop-blur-md text-xs px-3 py-1 rounded-md border border-white/10 text-white">
              {item.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}
