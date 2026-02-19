export default function JumpingFrogs() {
  const frogs = [
    { top: "5%", left: "3%", delay: "0s", size: "2.5rem" },
    { top: "12%", right: "5%", delay: "0.4s", size: "2rem" },
    { top: "25%", left: "6%", delay: "0.8s", size: "3rem" },
    { top: "35%", right: "4%", delay: "1.2s", size: "2.2rem" },
    { top: "48%", left: "2%", delay: "0.2s", size: "2.8rem" },
    { top: "55%", right: "3%", delay: "0.6s", size: "2rem" },
    { top: "65%", left: "5%", delay: "1s", size: "2.5rem" },
    { top: "75%", right: "6%", delay: "0.3s", size: "3rem" },
    { top: "85%", left: "4%", delay: "0.7s", size: "2.2rem" },
    { top: "92%", right: "5%", delay: "1.1s", size: "2.5rem" },
  ];

  return (
    <div className="jumping-frogs-container">
      {frogs.map((frog, i) => (
        <div
          key={i}
          className="jumping-frog"
          style={{
            position: "absolute",
            top: frog.top,
            left: frog.left,
            right: frog.right,
            animationDelay: frog.delay,
            fontSize: frog.size,
          }}
        >
          🐸
        </div>
      ))}
    </div>
  );
}
