export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="heading">Experience</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold">Accenture — Associate Software Engineer</h3>
          <p className="text-gray-500">Oct 2024 – Present • Bengaluru</p>
          <ul className="list-disc ml-6 subtext">
            <li>Developed Kotlin backend APIs migrating legacy Ruby/Python services.</li>
            <li>Improved maintainability using Swagger/OpenAPI documentation.</li>
            <li>Fixed CI/CD pipeline failures ensuring stable deployments.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">ORUphones — Android Developer Intern</h3>
          <p className="text-gray-500">Dec 2023 – Oct 2024 • Remote</p>
          <ul className="list-disc ml-6 subtext">
            <li>Improved UI responsiveness by 30% via navigation refactoring.</li>
            <li>Integrated Firebase & REST APIs achieving 99.5% crash-free sessions.</li>
            <li>Built battery health app with 5K+ downloads in first month.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
