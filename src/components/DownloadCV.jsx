import { Download } from "lucide-react";

export default function DownloadCV() {
  return (
    <a
      href="/Anshika_Resume.pdf"
      download
      className="download-cv-btn"
    >
      <Download size={18} />
      Download CV
    </a>
  );
}
