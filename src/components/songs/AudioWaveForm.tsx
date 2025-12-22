'use client'
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const AudioWaveform = ({ 
  isPlaying,
  currentTime,
  duration
}: { 
  isPlaying: boolean;
  currentTime: string;
  duration: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const progressRef = useRef(0);
  const [isReady, setIsReady] = useState(false);
  const [bars] = useState(() => 
    Array.from({ length: 80 }, () => Math.random() * 0.7 + 0.3)
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Establecer tamaño del canvas basado en el contenedor
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.height = 80;
      }
    };

    resizeCanvas();
    canvas.width = 636;
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      const barWidth = 4;
      const gap = 4;
      const totalBarWidth = barWidth + gap;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      bars.forEach((barHeight, index) => {
        const x = index * totalBarWidth;
        const normalizedHeight = barHeight * height * 0.7;
        const y = height - normalizedHeight;
        const barProgress = (index / bars.length) * 100;

        if (barProgress <= progressRef.current) {
          ctx.fillStyle = '#FFFFFF'; 
        } else {
          ctx.fillStyle = '#808080';
        }

        let animatedHeight = normalizedHeight;
        if (isPlaying && barProgress <= progressRef.current + 5) {
          const oscillation = Math.sin(Date.now() / 100 + index) * 3;
          animatedHeight = Math.max(4, normalizedHeight + oscillation);
        }

        const animatedY = height - animatedHeight;
        ctx.beginPath();
        ctx.roundRect(x, animatedY, barWidth, animatedHeight, 2);
        ctx.fill();
      });

      if (isPlaying) {
        progressRef.current += 0.15;
        if (progressRef.current > 100) {
          progressRef.current = 0;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    // Mark as ready after first draw
    draw();
    setIsReady(true);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, bars]);

  return (
    <div style={{
      backgroundColor: 'transparent', 
      width: '100%', 
      position: 'relative',
      opacity: isReady ? 1 : 0,
      transition: 'opacity 0.2s ease-in'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '80px',
          display: 'block'
        }}
      />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8px',
        fontSize: '12px',
        color: 'text.secondary',
        typography: 'h7'
      }}>
        <Typography>{currentTime}</Typography>
        <Typography>{duration}</Typography>
      </Box>
    </div>
  );
};

export default AudioWaveform;