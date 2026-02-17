export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur z-50 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-white">Anshika Negi</h1>
        <div className="flex gap-6 text-gray-400">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
