'use client'
// SelectCustom.tsx
import { ComponentType, useState, useRef, useEffect } from 'react';
import { Box, ClickAwayListener } from '@mui/material';
import { ArrowDownSvg } from '@/assets/icons';

interface ISelectCustomProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  iconComponent?: ComponentType;
  fullWidth?: boolean;
  disabled?: boolean;
}

const SelectCustom = ({
  options,
  value,
  onChange,
  iconComponent: IconComponent = ArrowDownSvg,
  fullWidth = true,
  disabled = false,
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
          width: fullWidth ? '100%' : 'auto',
          mb: 3,
          mt: 1.5,
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
            height: '44px',
            px: 2,
            bgcolor: 'grey.900',
            borderRadius: isOpen ? '12px 12px 0 0' : '12px',
            cursor: disabled ? 'default' : 'pointer',
            opacity: disabled ? 0.6 : 1,
            typography: 'h5',
            color: 'white',
            userSelect: 'none',
          }}
        >
          <span>{value}</span>
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
                  height: '44px',
                  px: 2,
                  bgcolor: option === value ? 'grey.800' : 'grey.900',
                  cursor: 'pointer',
                  typography: 'h5',
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