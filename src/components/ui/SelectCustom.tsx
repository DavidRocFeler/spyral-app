'use client'
// SelectCustom.tsx
import { ComponentType, useState, useRef, useEffect } from 'react';
import { Box, ClickAwayListener, Typography } from '@mui/material';
import { ArrowDownSvg } from '@/assets/icons';

interface ISelectCustomProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  iconComponent?: ComponentType;
  fullWidth?: boolean;
  disabled?: boolean;
  height?: string;
  heightOption?: string;
  borderRadius?: string;
  bgcolor?: string,
}

const SelectCustom = ({
  options,
  value,
  onChange,
  iconComponent: IconComponent = ArrowDownSvg,
  fullWidth = true,
  disabled = false,
  height= '44px',
  heightOption= '44px',
  borderRadius='12px',
  bgcolor= 'grey.900'
}: ISelectCustomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          position: 'relative',
          width: fullWidth ? '100%' : 'fit-content',
        }}
      >
        {/* Select Button */}
        <Box
          ref={selectRef}
          onClick={handleToggle}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: height,
            px: 2,
            bgcolor: bgcolor,
            borderRadius: isOpen ? '12px 12px 0 0' : borderRadius,
            cursor: disabled ? 'default' : 'pointer',
            opacity: disabled ? 0.6 : 1,
            typography: 'h5',
            color: 'white',
            userSelect: 'none',
          }}
        >
          <Typography variant='h8'>{value}</Typography>
          <Box
            component={IconComponent}
            sx={{
              color: '#FFF',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
              ml: 1,
            }}
          />
        </Box>

        {/* Dropdown Menu */}
        {isOpen && (
          <Box
            sx={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              bgcolor: 'grey.900',
              borderRadius: '0 0 12px 12px',
              zIndex: 1300,
              width: 'calc(100% + 0.45px)',
              overflowY: 'auto',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {options.map((option, idx) => (
              <Box
                key={idx}
                onClick={() => handleSelect(option)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: heightOption,
                  px: 2,
                  bgcolor: option === value ? 'grey.800' : 'grey.900',
                  cursor: 'pointer',
                  typography: 'h8',
                  color: 'white',
                  userSelect: 'none',
                  '&:hover': {
                    bgcolor: option === value ? 'grey.700' : 'grey.800',
                  },
                  '&:last-child': {
                    borderRadius: '0 0 12px 12px',
                  },
                }}
              >
                {option}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default SelectCustom;