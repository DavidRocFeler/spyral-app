'use client';
import { Box } from '@mui/material';
import { useNavigationStore } from '@/store/navigationStore';
import { ReactNode, useRef, useEffect } from 'react';

interface IModalWrapperProps {
  children: ReactNode;
}

const ModalWrapper = ({ children }: IModalWrapperProps) => {
  const isModalOpen = useNavigationStore((state) => state.isModalOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen && contentRef.current) {
      // Cuando el modal se abre, hacer scroll hacia arriba
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth' // Puedes cambiar a 'auto' si quieres que sea instantáneo
      });
    }
  }, [isModalOpen]);

  return (
    <Box 
      ref={contentRef}
      component="main" 
      className="custom-scrollbar"
      sx={{ 
        flex: 1, 
        overflow: isModalOpen ? 'hidden' : 'auto',
        position: 'relative'
      }}
    >
      {children}
    </Box>
  );
};

export default ModalWrapper;