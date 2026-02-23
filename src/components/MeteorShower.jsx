import { useEffect, useState } from "react";

export default function MeteorShower({ trigger }) {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    if (!trigger) return;

    const meteorArray = Array.from({ length: 40 }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1 + Math.random() * 2,
      size: 2 + Math.random() * 4,
    }));

    setMeteors(meteorArray);

    const timeout = setTimeout(() => setMeteors([]), 4000);
    return () => clearTimeout(timeout);
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {meteors.map((m, i) => (
        <div
          key={i}
          className="meteor"
          style={{
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            width: `${m.size}px`,
            height: `${m.size * 15}px`,
          }}
        />
      ))}
    </div>
  );
}