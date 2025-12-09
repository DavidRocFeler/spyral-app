import { ICollaboratorsProps } from '@/types/ui'
import { Box } from '@mui/material'
import Image from 'next/image'

// Componente individual para cada colaborador
const Collaborators = ({ 
  image,
  alt,
  width = 32,
  height = 32
}: ICollaboratorsProps) => {
  return (
    <Box
      display='flex'
      alignItems='center'
    >
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </Box>
  )
}

export default Collaborators;