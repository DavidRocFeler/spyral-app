'use client'
import { typography } from "@/theme/typography";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

// Waveform component - ACTUALIZA LA INTERFAZ
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
    
    // Generar alturas aleatorias para las barras (más variación)
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
        
        bars.forEach((barHeight, index) => {
          const x = index * totalBarWidth;
          const normalizedHeight = barHeight * height * 0.7; // Ajustar altura máxima
          
          // IMPORTANTE: Alinear desde abajo (y = altura total - altura de la barra)
          const y = height - normalizedHeight;
          
          // Color basado en si está antes o después del progreso
          const barProgress = (index / bars.length) * 100;
          
          if (barProgress <= progressRef.current) {
            ctx.fillStyle = '#FFFFFF'; // Blanco para barras reproducidas
          } else {
            ctx.fillStyle = '#808080'; // Gris oscuro para barras no reproducidas
          }
          
          // Añadir animación sutil si está reproduciendo
          let animatedHeight = normalizedHeight;
          if (isPlaying && barProgress <= progressRef.current + 5) {
            const oscillation = Math.sin(Date.now() / 100 + index) * 3;
            animatedHeight = Math.max(4, normalizedHeight + oscillation);
          }
          
          // Recalcular Y con la altura animada (siempre desde abajo)
          const animatedY = height - animatedHeight;
          
          // Bordes redondeados para las barras (radio mayor para puntas más redondeadas)
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
  
      draw();
  
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [isPlaying, bars]);
  
    return (
      <div style={{backgroundColor: 'transparent', width: '100%', position: 'relative' }}>
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '80px',
            display: 'block'
          }}
        />
        {/* Labels de tiempo como en Figma - USA LAS PROPS */}
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

export default AudioWaveform