'use client'
// SelectCustom.tsx
import { useState, useRef } from 'react';
import { Box, ClickAwayListener, Typography } from '@mui/material';
import { ArrowDownGreySvg, ArrowDownSvg } from '@/assets/icons';
import { ISelectCustomProps } from '@/types/ui';

const SelectCustom = ({
  options,
  value,
  onChange,
  iconComponent: IconComponent,
  fullWidth = true,
  disabled = false,
  height = '44px',
  heightOption = '44px',
  borderRadius = '12px',
  bgcolor = 'grey.900',
  width,
  variant = 'h8',
  mode = 'white',
  typographyOptions = 'h8',
  ptIcon = 0
}: ISelectCustomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const DefaultIcon = mode === 'white' ? ArrowDownSvg : ArrowDownGreySvg;
  const Icon = IconComponent || DefaultIcon;

  const textColor = mode === 'white' ? 'white' : 'text.secondary';
  const optionTextColor = mode === 'white' ? 'white' : 'text.secondary';

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
            width: width,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: height,
            px: 2,
            bgcolor: bgcolor,
            borderRadius: isOpen ? '12px 12px 0 0' : borderRadius,
            cursor: disabled ? 'default' : 'pointer',
            opacity: disabled ? 0.6 : 1,
            userSelect: 'none',
          }}
        >
          <Typography 
            sx={{
              typography: variant,
              color: textColor
            }}
          >
            {value}
          </Typography>
          <Box
            component={Icon}
            sx={{
              color: '#FFF',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
              ml: 1,
              pt: ptIcon
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
                  bgcolor: option === value ? bgcolor : 'grey.900',
                  cursor: 'pointer',
                  typography: typographyOptions,
                  color: optionTextColor,
                  userSelect: 'none',
                  '&:hover': {
                    bgcolor: option === value ? 'grey.800' : 'grey.800',
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