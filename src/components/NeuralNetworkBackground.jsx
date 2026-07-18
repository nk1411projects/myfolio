import React, { useEffect, useRef } from 'react';

const NeuralNetworkBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const maxParticles = 60; // Throttled for excellent performance
    const connectionDist = 120;
    
    // Set dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4; // slow drift
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleFactor = Math.random();
        this.twinkleDir = 1;
      }

      update() {
        // Move particle
        this.x += this.vx;
        this.y += this.vy;

        // Twinkle factor for stars
        this.twinkleFactor += this.twinkleSpeed * this.twinkleDir;
        if (this.twinkleFactor > 1 || this.twinkleFactor < 0.2) {
          this.twinkleDir *= -1;
        }

        // Boundary collision
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${this.twinkleFactor * 0.5})`; // Purple tint twinkling star
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Draw line between particle and mouse if close
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            // Draw connection
            const alpha = (1 - dist / mouse.radius) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`; // Blue connecting lines
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Pull particle slightly towards mouse
            p1.x -= dx * 0.005;
            p1.y -= dy * 0.005;
          }
        }

        // Connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`; // Purple/Blue link
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Events
    window.addEventListener('resize', resizeCanvas);
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#050816]">
      {/* Dynamic drifting background glow mesh */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#3B82F6]/8 blur-[150px] rounded-full animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#8B5CF6]/6 blur-[150px] rounded-full animate-pulse-glow" style={{ animationDelay: '-6s' }} />
      <div className="absolute top-[30%] right-[20%] w-[35%] h-[35%] bg-indigo-500/4 blur-[130px] rounded-full animate-pulse-glow" style={{ animationDelay: '-3s' }} />

      {/* Interactive canvas layer */}
      <canvas ref={canvasRef} className="absolute inset-0 block" />
    </div>
  );
};

export default NeuralNetworkBackground;
