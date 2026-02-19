import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const num = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Detect theme from HTML class
//     const isDark = document.documentElement.classList.contains("dark");

    // Particle color for themes
//     const particleColor = isDark
//       ? "rgba(0, 200, 255, 0.35)"   neon cyan in dark
//       : "rgba(0, 0, 0, 0.08)";     subtle gray in light

    for (let i = 0; i < num; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2 + 0.5
      });
    }

    const getParticleColor = () =>
      document.documentElement.classList.contains("dark")
        ? "rgba(0,200,255,0.35)"
        : "rgba(0,0,0,0.08)";

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = getParticleColor();
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500
                 opacity-50 dark:opacity-40"
    />
  );
}
