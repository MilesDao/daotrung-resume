"use client";

import { useEffect, useRef } from "react";

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: 0, y: 0 };
    let draggedParticle: Particle | null = null;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (draggedParticle) {
        draggedParticle.x = mouse.x;
        draggedParticle.y = mouse.y;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        // generous hit radius so it's easy to grab
        if (distance < p.size + 15) {
          draggedParticle = p;
          p.isDragged = true;
          document.body.style.userSelect = "none"; // Ngăn chọn chữ khi đang kéo
          break; // grab the first one we find under mouse
        }
      }
    };

    const handleMouseUp = () => {
      if (draggedParticle) {
        draggedParticle.isDragged = false;
        draggedParticle = null;
        document.body.style.userSelect = ""; // Cho phép chọn chữ lại
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseUp);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      isDragged: boolean;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 2; // Made particles slightly bigger
        this.speedX = (Math.random() * 1) - 0.5;
        this.speedY = (Math.random() * 1) - 0.5;
        this.isDragged = false;
      }

      update() {
        if (this.isDragged) return; // Only update position if not dragged

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;
        
        // Slight mouse repel when not dragging
        if (!draggedParticle) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            this.x -= dx * 0.02;
            this.y -= dy * 0.02;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.isDragged ? "rgba(150, 200, 255, 1)" : "rgba(100, 150, 255, 0.6)"; 
        if (this.isDragged) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(100, 150, 255, 1)";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        // Make the grabbed particle look bigger
        ctx.arc(this.x, this.y, this.isDragged ? this.size * 1.5 : this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 14000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      // Connect particles
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;
          
          if (distance < 12000) {
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.2 - distance / 80000})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      // Connect particles to mouse
      for (let i = 0; i < particles.length; i++) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const distance = dx * dx + dy * dy;

        if (distance < 15000) {
          // Glow the line stronger if dragging
          ctx.strokeStyle = draggedParticle 
            ? `rgba(150, 200, 255, ${0.4 - distance / 50000})` 
            : `rgba(100, 150, 255, ${0.25 - distance / 75000})`;
          ctx.lineWidth = draggedParticle ? 1.5 : 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 z-0 h-full w-full opacity-[0.55]"
    />
  );
}
