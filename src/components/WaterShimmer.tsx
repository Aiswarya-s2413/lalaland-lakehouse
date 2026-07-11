import React, { useEffect, useRef } from 'react';

export const WaterShimmer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle structure for water highlights
    interface Ripple {
      x: number;
      y: number;
      length: number;
      speed: number;
      alpha: number;
      width: number;
      phase: number;
    }

    const ripples: Ripple[] = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
      ripples.push({
        x: Math.random() * width,
        y: (0.4 + Math.random() * 0.5) * height, // Keep them in the lower half (lake region)
        length: 50 + Math.random() * 150,
        speed: 0.02 + Math.random() * 0.03,
        alpha: 0.02 + Math.random() * 0.07,
        width: 1 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle wave layers
      ripples.forEach((ripple) => {
        ripple.phase += ripple.speed;
        // Float horizontal positions slightly
        const drift = Math.sin(ripple.phase) * 15;
        const currentAlpha = ripple.alpha * (0.6 + Math.sin(ripple.phase * 2) * 0.4);

        // Gold/Sun glow reflection
        ctx.strokeStyle = `rgba(217, 164, 65, ${currentAlpha})`;
        ctx.lineWidth = ripple.width;
        ctx.beginPath();
        
        const startX = ripple.x + drift - ripple.length / 2;
        const endX = ripple.x + drift + ripple.length / 2;
        const waveY = ripple.y + Math.sin(ripple.phase * 3) * 3;

        ctx.moveTo(startX, waveY);
        // Draw slightly curved lines to feel like liquid ripples
        ctx.bezierCurveTo(
          startX + ripple.length * 0.25, waveY - 2,
          startX + ripple.length * 0.75, waveY + 2,
          endX, waveY
        );
        ctx.stroke();

        // Warp screen edges
        if (ripple.x - ripple.length / 2 > width) {
          ripple.x = -ripple.length / 2;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="shimmer" aria-hidden="true" style={{ pointerEvents: 'none' }} />;
};
