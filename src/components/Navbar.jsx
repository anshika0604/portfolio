import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: "Let's Talk", href: '#talk' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl px-10 py-4 shadow-lg max-w-7xl w-[94%]">

      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
        {/* Logo/Name - Left */}
        <motion.a
          href="#"
          className="text-lg lg:text-xl font-semibold text-[#2dd4bf] tracking-wider drop-shadow-[0_0_8px_rgba(45,212,191,0.35)]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Anshika
        </motion.a>

        {/* Desktop Nav - Right */}
        <ul className="hidden md:flex items-center space-x-5 lg:space-x-7">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <motion.a
                href={link.href}
                className="relative text-xs lg:text-sm font-normal text-gray-300 hover:text-white transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300 origin-left" />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 p-1 group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-white/90 rounded-sm transition-all duration-300 group-hover:bg-white"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 3 : 0,
              backgroundColor: isOpen ? '#ffffff' : '#ffffffcc'
            }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white/90 rounded-sm transition-all duration-300"
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0.8 : 1
            }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white/90 rounded-sm transition-all duration-300 group-hover:bg-white"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -3 : 0,
              backgroundColor: isOpen ? '#ffffff' : '#ffffffcc'
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-4 border-t border-white/5 last:border-b-0"
              >
                <a
                  href={link.href}
                  className="block text-sm font-normal text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <span className="ml-2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 inline-block group-hover:w-8 transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
