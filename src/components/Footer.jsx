import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-36 relative">

      {/* Title */}
      <h2 className="text-5xl font-semibold text-center tracking-tight text-gray-900 text-[var(--text-primary)]">
        Get in <span className="text-cyan-500">Touch</span>
      </h2>

      <p className="text-center text-gray-700 dark:text-gray-400 mt-4 text-lg">
        Let’s connect! Feel free to reach out through any of these platforms.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-20">

        {/* Email */}
        <a
          href="mailto:anshikanegi.cs19@gmail.com"
          className="contact-card focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <div className="contact-icon email">
            <FaEnvelope />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-[var(--text-primary)]">Email</h3>
            <p className="text-gray-700 dark:text-gray-400">
              anshikanegi.cs19@gmail.com
            </p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/anshika0604"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <div className="contact-icon github">
            <FaGithub />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-[var(--text-primary)]">GitHub</h3>
            <p className="text-gray-700 dark:text-gray-400">
              github.com/anshika0604
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/anshika-negi-621311201"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <div className="contact-icon linkedin">
            <FaLinkedin />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-[var(--text-primary)]">LinkedIn</h3>
            <p className="text-gray-700 dark:text-gray-400">
              linkedin.com/in/anshika-negi
            </p>
          </div>
        </a>

      </div>

      {/* Footer note */}
      <p className="text-center text-gray-600 dark:text-gray-500 mt-20 italic text-sm">
        Thanks for visiting my portfolio — always happy to collaborate and build something meaningful.
      </p>

    </section>
  );
}
