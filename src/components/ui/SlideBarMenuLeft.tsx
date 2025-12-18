'use client'
import { Box, Typography } from '@mui/material'
import { useState, ComponentType, isValidElement, ReactElement } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ISlideBarMenuProps } from '@/types/ui'

const SlideBarMenuLeft = ({
  menuItems
}: ISlideBarMenuProps) => {
  const pathname = usePathname()

  const renderIcon = (icon?: ReactElement | ComponentType) => {
    if (!icon) return null;
    if (isValidElement(icon)) {
      return icon;
    }
    const IconComponent = icon as ComponentType;
    return <IconComponent />;
  };

  return (
    <Box sx={{ 
      width: '200px',
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      pt: 3,
      px: 0,
      borderRight: '1px solid',
      borderColor: 'grey.900',
    }}>
      {menuItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Box key={index} sx={{ mb: 1 }}>
            <Link 
              href={item.href} 
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  bgcolor: isActive ? 'background.default' : item.bgcolor,
                  borderRadius: '50px',
                  display: 'flex',
                  justifyContent: 'start',
                  height: '43px',
                  width: '160px',
                  px: 2,
                  pl: 2.5,
                  gap: 1.5,
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.9,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: 'text.primary',
                    typography: 'h8'
                  }}
                >
                  {item.text}
                </Typography>
                {renderIcon(item.icon)}
              </Box>
            </Link>
          </Box>
        )
      })}
    </Box>
  )
}

export default SlideBarMenuLeft