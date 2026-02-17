export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="heading">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border border-gray-800 p-6 rounded-lg hover:bg-gray-900 transition">
          <h3 className="font-semibold text-white">Social Media Trends Tracker</h3>
          <p className="subtext">
            Real-time Instagram hashtag trends using Kotlin, Spring Boot, Kafka, PostgreSQL, Docker.
          </p>
          <a className="text-blue-400" href="https://github.com/anshika0604/socialTrendApp">GitHub</a>
        </div>

        <div className="border border-gray-800 p-6 rounded-lg hover:bg-gray-900 transition">
          <h3 className="font-semibold text-white">Android Attendance System (QR)</h3>
          <p className="subtext">
            QR-based attendance tracking app using Java and Firebase Realtime Database.
          </p>
          <a className="text-blue-400" href="https://github.com/anshika0604/Android-Attendance-Sytem-Using-QR-Code">GitHub</a>
        </div>

      </div>
    </section>
  );
}
