import { useEffect, useRef } from "react";


type StarCanvasProps = {
  count?: number;
  maxDistance?: number;
  mouseDistance?: number;
  starColor?: string;      //num
  lineColor?: string;      //numeros
  background?: string;
  speed?: number;
};

export default function StarCanvas({
  count = 600,
  maxDistance = 80,
  mouseDistance = 100,
  starColor = "255,255,255",
  lineColor = "100,150,255",
  background = "#000011",
  speed = 1,
}: StarCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // referências fixas (TypeScript safe) pq ele precisava
    const canvasEl = canvas;
    const context = ctx;

    // -----------------------------
    // Resize
    // -----------------------------
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvasEl.width = window.innerWidth * dpr;
      canvasEl.height = window.innerHeight * dpr;
      canvasEl.style.width = "100vw";
      canvasEl.style.height = "100vh";
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // -----------------------------
    // Mouse
    // -----------------------------
    const mouse = {
      x: null as number | null,
      y: null as number | null,
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvasEl.addEventListener("mousemove", onMouseMove);
    canvasEl.addEventListener("mouseleave", onMouseLeave);

    // -----------------------------
    // Star class
    // -----------------------------
    class Star {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      brightness: number;
      pulse: number;
      currentBrightness: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.6 * speed;
        this.vy = (Math.random() - 0.5) * 0.3 * speed;
        this.size = Math.random() * 3 + 1;
        this.brightness = Math.random() * 0.5 + 0.5;
        this.pulse = Math.random() * Math.PI * 2;
        this.currentBrightness = this.brightness;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;

        this.pulse += 0.05;
        this.currentBrightness =
          this.brightness + Math.sin(this.pulse) * 0.3;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(${starColor},${this.currentBrightness})`;
        context.shadowColor = `rgba(${starColor},1)`;
        context.shadowBlur = 10 * this.currentBrightness;
        context.fill();
        context.shadowBlur = 0;
      }
    }

    // -----------------------------
    // Create stars
    // -----------------------------
    const stars: Star[] = [];
    for (let i = 0; i < count; i++) {
      stars.push(new Star());
    }

    // -----------------------------
    // Animation loop
    // -----------------------------
    let animationId = 0;

    const animate = () => {
      context.clearRect(0, 0, canvasEl.width, canvasEl.height);

      stars.forEach((s1, i) => {
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dist = Math.hypot(s1.x - s2.x, s1.y - s2.y);
          let connect = dist < maxDistance;

          if (mouse.x && mouse.y) {
            const d1 = Math.hypot(s1.x - mouse.x, s1.y - mouse.y);
            const d2 = Math.hypot(s2.x - mouse.x, s2.y - mouse.y);
            if (d1 < mouseDistance && d2 < mouseDistance) connect = true;
          }

          if (connect) {
            context.beginPath();
            context.moveTo(s1.x, s1.y);
            context.lineTo(s2.x, s2.y);
            context.strokeStyle = `rgba(${lineColor},${
              (1 - dist / maxDistance) * s1.currentBrightness
            })`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      });

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // -----------------------------
    // Cleanup
    // -----------------------------
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvasEl.removeEventListener("mousemove", onMouseMove);
      canvasEl.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [
    count,
    maxDistance,
    mouseDistance,
    starColor,
    lineColor,
    background,
    speed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background,
      }}
    />
  );
}
