import { IGrandiantButton } from '@/types/ui'
import { Box } from '@mui/material'
import Link from 'next/link'

const GrandiantButton = ({
  href = '/desktop/access/auth/godashboard'
}: IGrandiantButton) => {
  return (
    <Box
    className='gradient-active'
    sx={{
      typography: 'h8',
      height: '44px',
      width: '150px',
      borderRadius: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'primary.main',
      cursor: 'pointer'
    }}
    >
      <Link
      href={href}
      style={{
        color: 'inherit',
        textDecoration: 'none'
      }}
      >
      Continue
      </Link>
    </Box>
  )
}

export default GrandiantButton