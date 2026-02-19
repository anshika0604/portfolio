import { useEffect, useRef } from "react";

export default function RoamingSnake() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;
    const eatenEls = [];

    // --- Canvas sizing ---
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // --- Particles for eating effect ---
    const particles = [];

    function spawnEatParticles(el, headX, headY) {
      const rect = el.getBoundingClientRect();
      const text = el.innerText || "";
      const chars = text.split("");
      const cols = Math.max(1, Math.floor(rect.width / 14));

      chars.forEach((ch, i) => {
        if (ch.trim() === "") return;
        const row = Math.floor(i / cols);
        const col = i % cols;
        const px = rect.x + (col / cols) * rect.width + Math.random() * 8;
        const py = rect.y + row * 18 + Math.random() * 8;

        particles.push({
          char: ch,
          x: px,
          y: py,
          targetX: headX,
          targetY: headY,
          progress: 0,
          speed: 0.012 + Math.random() * 0.025,
          delay: i * 0.008 + Math.random() * 0.15,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.3,
          opacity: 1,
          size: 12 + Math.random() * 4,
          color: `hsl(${140 + Math.random() * 40}, 80%, ${55 + Math.random() * 20}%)`,
          orbitRadius: 20 + Math.random() * 40,
          done: false,
        });
      });
    }

    function updateParticles(headX, headY) {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        if (p.done) {
          particles.splice(i, 1);
          continue;
        }

        if (p.delay > 0) {
          p.delay -= 0.016;
          continue;
        }

        // Update target to current head position
        p.targetX = headX;
        p.targetY = headY;
        p.progress += p.speed;
        p.angle += p.spin;

        if (p.progress >= 1) {
          p.done = true;
          continue;
        }

        // Ease-in curve for acceleration toward head
        const ease = p.progress * p.progress * p.progress;

        // Spiral path: starts at original position, spirals into snake head
        const orbit = p.orbitRadius * (1 - ease);
        const baseX = p.x + (p.targetX - p.x) * ease;
        const baseY = p.y + (p.targetY - p.y) * ease;
        p.renderX = baseX + Math.cos(p.angle + p.progress * 8) * orbit;
        p.renderY = baseY + Math.sin(p.angle + p.progress * 8) * orbit;

        // Fade and shrink as approaching mouth
        p.opacity = 1 - ease * ease;
        p.renderSize = p.size * (1 - ease * 0.7);
      }
    }

    function drawParticles() {
      for (const p of particles) {
        if (p.delay > 0 || p.done) continue;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.font = `bold ${p.renderSize}px monospace`;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.translate(p.renderX, p.renderY);
        ctx.rotate(p.angle);
        ctx.fillText(p.char, 0, 0);
        ctx.restore();
      }
    }

    // --- Snake state ---
    const HISTORY_LEN = 600;
    const trail = []; // dense position history for smooth body
    let snakeLength = 25;
    let speed = 2.8;
    let angle = 0;
    let roamTimer = 0;
    let currentTarget = null;
    let eatenCount = 0;
    let allEaten = false;
    let finalPhase = false;
    let finalOpacity = 0;
    let doneAnimating = false;
    let bulge = 0; // grows temporarily after eating
    let frameCount = 0;

    // Start position
    const startX = -20;
    const startY = window.innerHeight / 2;
    for (let i = 0; i < HISTORY_LEN; i++) {
      trail.push({ x: startX - i * 1.5, y: startY });
    }

    // --- Catmull-Rom spline for smooth body ---
    function catmullRom(p0, p1, p2, p3, t) {
      const t2 = t * t;
      const t3 = t2 * t;
      return {
        x:
          0.5 *
          (2 * p1.x +
            (-p0.x + p2.x) * t +
            (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
            (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
        y:
          0.5 *
          (2 * p1.y +
            (-p0.y + p2.y) * t +
            (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
            (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
      };
    }

    // --- Target gathering ---
    function gatherTargets() {
      const els = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, a, span, li, button, td, th, label"
      );
      return Array.from(els).filter((el) => {
        if (el.closest(".roaming-snake-overlay")) return false;
        if (eatenEls.includes(el)) return false;
        const rect = el.getBoundingClientRect();
        const text = el.innerText?.trim();
        return text && text.length > 0 && rect.width > 5 && rect.height > 5;
      });
    }

    function pickTarget() {
      const targets = gatherTargets();
      if (targets.length === 0) {
        if (!allEaten && eatenCount > 0) {
          allEaten = true;
          setTimeout(() => {
            finalPhase = true;
          }, 1200);
        }
        return null;
      }
      const head = trail[0];
      targets.sort((a, b) => {
        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();
        const da = Math.hypot(
          ra.x + ra.width / 2 - head.x,
          ra.y + ra.height / 2 - head.y
        );
        const db = Math.hypot(
          rb.x + rb.width / 2 - head.x,
          rb.y + rb.height / 2 - head.y
        );
        return da - db;
      });
      // Pick from closest few
      return targets[Math.floor(Math.random() * Math.min(3, targets.length))];
    }

    // --- Movement ---
    function moveSnake() {
      frameCount++;
      const head = trail[0];

      if (!allEaten) {
        if (!currentTarget || eatenEls.includes(currentTarget)) {
          currentTarget = pickTarget();
          roamTimer = 0;
        }
        roamTimer++;
        if (roamTimer > 350) {
          currentTarget = pickTarget();
          roamTimer = 0;
        }

        if (currentTarget) {
          const rect = currentTarget.getBoundingClientRect();
          const tx = rect.x + rect.width / 2;
          const ty = rect.y + rect.height / 2;
          const targetAngle = Math.atan2(ty - head.y, tx - head.x);

          let diff = targetAngle - angle;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;

          // Tighter turning when close
          const dist = Math.hypot(tx - head.x, ty - head.y);
          const turnRate = dist < 100 ? 0.12 : 0.06;
          angle += diff * turnRate;
        } else {
          angle += Math.sin(frameCount * 0.01) * 0.06;
        }

        // Natural slither: sine wave perpendicular to direction
        const slither = Math.sin(frameCount * 0.08) * 0.6;
        const perpAngle = angle + Math.PI / 2;
        const slitherX = Math.cos(perpAngle) * slither;
        const slitherY = Math.sin(perpAngle) * slither;

        const newHead = {
          x: head.x + Math.cos(angle) * speed + slitherX,
          y: head.y + Math.sin(angle) * speed + slitherY,
        };

        // Bounce off edges
        if (newHead.x < 10 || newHead.x > canvas.width - 10) {
          angle = Math.PI - angle;
          newHead.x = Math.max(10, Math.min(canvas.width - 10, newHead.x));
        }
        if (newHead.y < 10 || newHead.y > canvas.height - 10) {
          angle = -angle;
          newHead.y = Math.max(10, Math.min(canvas.height - 10, newHead.y));
        }

        trail.unshift(newHead);
        if (trail.length > HISTORY_LEN) trail.pop();
      } else if (finalPhase) {
        angle += 0.06 + Math.sin(frameCount * 0.003) * 0.04;
        speed = Math.min(speed + 0.02, 9);
        const newHead = {
          x: head.x + Math.cos(angle) * speed,
          y: head.y + Math.sin(angle) * speed,
        };
        if (newHead.x < 10 || newHead.x > canvas.width - 10)
          angle = Math.PI - angle;
        if (newHead.y < 10 || newHead.y > canvas.height - 10) angle = -angle;
        newHead.x = Math.max(10, Math.min(canvas.width - 10, newHead.x));
        newHead.y = Math.max(10, Math.min(canvas.height - 10, newHead.y));
        trail.unshift(newHead);
        if (trail.length > HISTORY_LEN) trail.pop();
      } else {
        angle += (Math.random() - 0.5) * 0.1;
        const newHead = {
          x: head.x + Math.cos(angle) * speed,
          y: head.y + Math.sin(angle) * speed,
        };
        trail.unshift(newHead);
        if (trail.length > HISTORY_LEN) trail.pop();
      }

      // --- Check eating ---
      if (currentTarget && !eatenEls.includes(currentTarget)) {
        const head = trail[0];
        const rect = currentTarget.getBoundingClientRect();
        const cx = rect.x + rect.width / 2;
        const cy = rect.y + rect.height / 2;
        const dist = Math.hypot(head.x - cx, head.y - cy);

        if (dist < Math.max(rect.width, rect.height) / 2 + 20) {
          // Spawn character particles before hiding
          spawnEatParticles(currentTarget, head.x, head.y);

          eatenEls.push(currentTarget);
          // Element shrinks and fades
          currentTarget.style.transition =
            "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1), filter 0.8s ease";
          currentTarget.style.opacity = "0";
          currentTarget.style.transform = `scale(0.3) translate(${head.x - cx > 0 ? 40 : -40}px, ${head.y - cy > 0 ? 20 : -20}px)`;
          currentTarget.style.filter = "blur(4px)";
          eatenCount++;

          // Grow snake
          const textLen = currentTarget.innerText?.length || 0;
          const growth = Math.min(12, 3 + Math.floor(textLen / 8));
          snakeLength += growth;
          speed = Math.min(speed + 0.04, 5);
          bulge = 1.0; // trigger eating bulge animation

          currentTarget = null;
          roamTimer = 0;
        }
      }

      // Decay bulge
      if (bulge > 0) bulge *= 0.97;
      if (bulge < 0.01) bulge = 0;

      // Update particles toward current head
      updateParticles(trail[0].x, trail[0].y);
    }

    // --- Drawing ---
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sample body points from trail based on snake length
      const spacing = 3; // trail indices per body point
      const bodyCount = Math.min(
        Math.floor(snakeLength * 2.5),
        Math.floor(trail.length / spacing)
      );
      if (bodyCount < 4) return;

      const bodyPoints = [];
      for (let i = 0; i < bodyCount; i++) {
        const idx = Math.min(i * spacing, trail.length - 1);
        bodyPoints.push(trail[idx]);
      }

      // --- Draw smooth body using spline ---
      const maxRadius = Math.min(24, 9 + snakeLength * 0.07);

      // Build spline segments
      for (let i = 0; i < bodyPoints.length - 1; i++) {
        const p0 = bodyPoints[Math.max(0, i - 1)];
        const p1 = bodyPoints[i];
        const p2 = bodyPoints[Math.min(bodyPoints.length - 1, i + 1)];
        const p3 = bodyPoints[Math.min(bodyPoints.length - 1, i + 2)];

        const steps = 4;
        for (let s = 0; s < steps; s++) {
          const t = s / steps;
          const pt = catmullRom(p0, p1, p2, p3, t);
          const bodyT = (i * steps + s) / (bodyPoints.length * steps); // 0=head, 1=tail

          // Width taper: bulky body that stays thick through 60%
          let widthT;
          if (bodyT < 0.04) {
            widthT = 0.65 + bodyT * 9; // head tip widens quickly
          } else if (bodyT < 0.5) {
            widthT = 1.0; // stays at full thickness for half the body
          } else if (bodyT < 0.8) {
            widthT = 1.0 - (bodyT - 0.5) * 0.8; // gradual taper
          } else {
            widthT = 0.76 - (bodyT - 0.8) * 3.2; // tail tip
          }

          // Eating bulge effect
          const bulgeWave = bulge * Math.sin(bodyT * Math.PI * 3) * 0.4;
          widthT += bulgeWave * (1 - bodyT);

          const radius = Math.max(1.5, maxRadius * widthT);

          // Body coloring: green with darker diamond pattern
          const hue = 130 + bodyT * 15;
          const light = 42 - bodyT * 12;
          const sat = 75 - bodyT * 15;

          // Belly is lighter (based on angle between segments)
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${hue}, ${sat}%, ${light}%)`;
          ctx.fill();

          // --- Bold diamond / crossband pattern ---
          if (bodyT > 0.04 && bodyT < 0.92) {
            // Alternating dark diamond bands
            const bandFreq = 0.12; // spacing of bands
            const bandPos = (bodyT % bandFreq) / bandFreq;
            const inBand = bandPos < 0.45;

            if (inBand && s === 0) {
              // Dark diamond shape
              const dSize = radius * 0.85;
              ctx.save();
              ctx.translate(pt.x, pt.y);
              ctx.rotate(Math.atan2(
                (p2.y - p0.y), (p2.x - p0.x)
              ));
              ctx.beginPath();
              ctx.moveTo(0, -dSize);
              ctx.lineTo(dSize * 0.7, 0);
              ctx.lineTo(0, dSize);
              ctx.lineTo(-dSize * 0.7, 0);
              ctx.closePath();
              ctx.fillStyle = `hsla(${hue - 15}, ${sat + 10}%, ${light - 14}%, 0.7)`;
              ctx.fill();
              // Inner diamond highlight
              const inner = dSize * 0.4;
              ctx.beginPath();
              ctx.moveTo(0, -inner);
              ctx.lineTo(inner * 0.6, 0);
              ctx.lineTo(0, inner);
              ctx.lineTo(-inner * 0.6, 0);
              ctx.closePath();
              ctx.fillStyle = `hsla(${hue + 20}, ${sat}%, ${light + 8}%, 0.5)`;
              ctx.fill();
              ctx.restore();
            }

            // Dorsal stripe (center line along back)
            if (s === 1) {
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, radius * 0.18, 0, Math.PI * 2);
              ctx.fillStyle = `hsla(90, 60%, ${light + 18}%, 0.35)`;
              ctx.fill();
            }
          }

          // Belly highlight — lighter underside
          if (s === 2 && radius > 3) {
            ctx.beginPath();
            ctx.ellipse(pt.x, pt.y, radius * 0.45, radius * 0.55, 0, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${hue + 5}, ${sat - 25}%, ${light + 20}%, 0.18)`;
            ctx.fill();
          }
        }
      }

      // --- Smooth body outline for definition ---
      ctx.beginPath();
      for (let i = 0; i < bodyPoints.length - 1; i++) {
        const p0 = bodyPoints[Math.max(0, i - 1)];
        const p1 = bodyPoints[i];
        const p2 = bodyPoints[Math.min(bodyPoints.length - 1, i + 1)];
        const p3 = bodyPoints[Math.min(bodyPoints.length - 1, i + 2)];
        const pt = catmullRom(p0, p1, p2, p3, 0.5);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.strokeStyle = "rgba(0,0,0,0.12)";
      ctx.lineWidth = maxRadius * 2.4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // Re-draw body on top of outline (fill over outline for smooth look)
      for (let i = 0; i < bodyPoints.length - 1; i++) {
        const p0 = bodyPoints[Math.max(0, i - 1)];
        const p1 = bodyPoints[i];
        const p2 = bodyPoints[Math.min(bodyPoints.length - 1, i + 1)];
        const p3 = bodyPoints[Math.min(bodyPoints.length - 1, i + 2)];

        const steps = 3;
        for (let s = 0; s < steps; s++) {
          const t = s / steps;
          const pt = catmullRom(p0, p1, p2, p3, t);
          const bodyT = (i * steps + s) / (bodyPoints.length * steps);

          let widthT;
          if (bodyT < 0.05) widthT = 0.6 + bodyT * 8;
          else if (bodyT < 0.15) widthT = 1.0;
          else widthT = 1.0 - (bodyT - 0.15) * 0.9;

          const bulgeWave = bulge * Math.sin(bodyT * Math.PI * 3) * 0.4;
          widthT += bulgeWave * (1 - bodyT);

          const radius = Math.max(1.5, maxRadius * widthT);
          const hue = 130 + bodyT * 15;
          const light = 42 - bodyT * 12;
          const sat = 75 - bodyT * 15;

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, radius - 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${hue}, ${sat}%, ${light}%)`;
          ctx.fill();
        }
      }

      // --- Head ---
      const head = trail[0];
      const headR = Math.min(28, maxRadius * 1.5);

      // Head shape — slightly triangular
      ctx.save();
      ctx.translate(head.x, head.y);
      ctx.rotate(angle);

      // Head base
      ctx.beginPath();
      ctx.ellipse(0, 0, headR * 1.5, headR * 1.1, 0, 0, Math.PI * 2);
      ctx.fillStyle = "hsl(135, 70%, 40%)";
      ctx.fill();

      // Head top highlight
      ctx.beginPath();
      ctx.ellipse(headR * 0.2, 0, headR * 0.9, headR * 0.6, 0, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(135, 75%, 50%, 0.3)";
      ctx.fill();

      // Nostrils
      for (const side of [1, -1]) {
        ctx.beginPath();
        ctx.arc(headR * 1.1, side * headR * 0.25, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();
      }

      // Eyes
      for (const side of [1, -1]) {
        const ex = headR * 0.2;
        const ey = side * headR * 0.7;

        // Eye socket
        ctx.beginPath();
        ctx.ellipse(ex, ey, 7, 5.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#1a1a1a";
        ctx.fill();

        // Eyeball
        ctx.beginPath();
        ctx.ellipse(ex, ey, 5.8, 4.8, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#ffe066";
        ctx.fill();

        // Slit pupil
        ctx.beginPath();
        ctx.ellipse(ex + 1.2, ey, 2.2, 4.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#000";
        ctx.fill();

        // Eye gleam
        ctx.beginPath();
        ctx.arc(ex - 2, ey - 2, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
      }

      // Tongue
      const tonguePhase = Math.sin(frameCount * 0.15);
      if (tonguePhase > -0.4) {
        const tongueExt = 12 + tonguePhase * 8 + snakeLength * 0.06;
        ctx.beginPath();
        ctx.moveTo(headR * 1.4, 0);
        // Wavy tongue
        ctx.quadraticCurveTo(
          headR * 1.4 + tongueExt * 0.5,
          Math.sin(frameCount * 0.2) * 3,
          headR * 1.4 + tongueExt,
          Math.sin(frameCount * 0.3) * 2
        );
        ctx.strokeStyle = "#dc2626";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Fork
        const forkLen = 7;
        const tipX = headR * 1.4 + tongueExt;
        const tipY = Math.sin(frameCount * 0.3) * 2;
        for (const s of [1, -1]) {
          ctx.beginPath();
          ctx.moveTo(tipX, tipY);
          ctx.lineTo(tipX + forkLen, tipY + s * 4);
          ctx.stroke();
        }
      }

      ctx.restore();

      // Head glow
      const glow = ctx.createRadialGradient(
        head.x, head.y, 0,
        head.x, head.y, 30 + snakeLength * 0.2
      );
      glow.addColorStop(0, "rgba(74, 222, 128, 0.1)");
      glow.addColorStop(1, "rgba(74, 222, 128, 0)");
      ctx.beginPath();
      ctx.arc(head.x, head.y, 40 + snakeLength * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // --- Draw particles ---
      drawParticles();

      // --- Eating indicator near head ---
      if (bulge > 0.1) {
        ctx.save();
        ctx.globalAlpha = bulge * 0.6;
        ctx.font = "bold 18px monospace";
        ctx.fillStyle = "#4ade80";
        ctx.shadowColor = "#4ade80";
        ctx.shadowBlur = 10;
        ctx.textAlign = "center";
        ctx.fillText("NOM!", head.x, head.y - maxRadius - 12);
        ctx.restore();
      }

      // --- Final blackout ---
      if (finalPhase) {
        finalOpacity = Math.min(finalOpacity + 0.005, 1);
        ctx.fillStyle = `rgba(0, 0, 0, ${finalOpacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (finalOpacity > 0.4) {
          ctx.save();
          ctx.globalAlpha = Math.min((finalOpacity - 0.4) / 0.6, 1);

          // Snake emoji + text
          ctx.font = "bold 46px monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#4ade80";
          ctx.shadowColor = "#4ade80";
          ctx.shadowBlur = 20;
          ctx.fillText(
            "\uD83D\uDC0D The snake ate everything!",
            canvas.width / 2,
            canvas.height / 2 - 20
          );

          ctx.shadowBlur = 0;
          ctx.font = "16px monospace";
          ctx.fillStyle = "#666";
          ctx.fillText(
            `${eatenCount} elements devoured`,
            canvas.width / 2,
            canvas.height / 2 + 25
          );

          ctx.fillStyle = "#555";
          ctx.fillText(
            "refresh to restore",
            canvas.width / 2,
            canvas.height / 2 + 55
          );
          ctx.restore();
        }

        if (finalOpacity >= 1) doneAnimating = true;
      }
    }

    // --- Game loop ---
    function gameLoop() {
      moveSnake();
      draw();
      if (!doneAnimating) {
        animationId = requestAnimationFrame(gameLoop);
      }
    }

    const startDelay = setTimeout(() => {
      animationId = requestAnimationFrame(gameLoop);
    }, 2000);

    // --- Cleanup ---
    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      eatenEls.forEach((el) => {
        el.style.transition = "";
        el.style.opacity = "";
        el.style.transform = "";
        el.style.filter = "";
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="roaming-snake-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
