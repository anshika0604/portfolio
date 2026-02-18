import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-36 relative">

      {/* Title */}
      <h2 className="text-5xl font-semibold text-center tracking-tight">
        Get in <span className="text-cyan-400">Touch</span>
      </h2>

      <p className="text-center text-gray-400 mt-4 text-lg">
        Let’s connect! Feel free to reach out through any of these platforms.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-20">

        {/* Email */}
        <a href="mailto:anshikanegi.cs19@gmail.com" className="contact-card">
          <div className="contact-icon email">
            <FaEnvelope />
          </div>
          <div>
            <h3>Email</h3>
            <p>anshikanegi.cs19@gmail.com</p>
          </div>
        </a>

        {/* GitHub */}
        <a href="https://github.com/anshika0604" target="_blank" className="contact-card">
          <div className="contact-icon github">
            <FaGithub />
          </div>
          <div>
            <h3>GitHub</h3>
            <p>github.com/anshika0604</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/anshika-negi-621311201" target="_blank" className="contact-card">
          <div className="contact-icon linkedin">
            <FaLinkedin />
          </div>
          <div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/anshika-negi</p>
          </div>
        </a>

      </div>

      {/* Footer note */}
      <p className="text-center text-gray-500 mt-20 italic text-sm">
        Thanks for visiting my portfolio — always happy to collaborate and build something meaningful.
      </p>

    </section>
  );
}
