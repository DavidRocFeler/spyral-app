'use client';
import { CalendarSvg } from "@/assets/icons";
import { TextField, InputAdornment, TextFieldProps, Popover, Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { format, parse, isValid } from 'date-fns';
import { es } from 'date-fns/locale';
import { IInputCalendarProps } from "@/types/playlist";

const CalendarMetadata = ({
  value,
  onChange,
  placeholder = "DD/MM/YYYY",
  ...rest
}: IInputCalendarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const isOpen = Boolean(anchorEl);

  const getDateFromValue = (): Date | null => {
    if (!value) return null;
    try {
      const parsed = parse(value, 'yyyy-MM-dd', new Date());
      return isValid(parsed) ? parsed : null;
    } catch {
      return null;
    }
  };

  const getDisplayValue = (): string => {
    const date = getDateFromValue();
    if (!date) return '';
    const formatted = format(date, 'dd MMM', { locale: es }).replace('.', '');
    return formatted.split(' ').map((word, i) => 
      i === 1 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    ).join(' ');
  };

  const handleDateChange = (newDate: Date | null) => {
    if (newDate && isValid(newDate)) {
      const formattedDate = format(newDate, 'yyyy-MM-dd');
      onChange(formattedDate);
    }
    setAnchorEl(null);
  };

  const handleTogglePicker = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isOpen) {
      setAnchorEl(null);
    } else {
      setAnchorEl(e.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hasValue = !!value;

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextField
        {...rest}
        type="text"
        value={getDisplayValue()}
        onChange={() => {}}
        inputRef={inputRef}
        onClick={handleTogglePicker}
        placeholder=""
        sx={{
          width: '100%',
          height: '44px',
          '& .MuiOutlinedInput-root': {
            height: '44px',
            bgcolor: 'grey.900',
            color: hasValue ? 'text.primary' : 'transparent',
            borderRadius: '12px',
            cursor: 'pointer',
            '& fieldset': { 
              borderColor: 'grey.900',
            },
            '&:hover fieldset': { 
              borderColor: 'grey.900'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'grey.900'
            }
          },
          '& .MuiInputBase-input': {
            py: 0,
            typography: 'h7',
            cursor: 'pointer',
            caretColor: 'transparent',
          }
        }}
        slotProps={{
          input: {
            readOnly: true,
            endAdornment: (
              <InputAdornment 
                position="end" 
                sx={{ cursor: 'pointer' }}
                onClick={handleTogglePicker}
              >
                <CalendarSvg />
              </InputAdornment>
            ),
          }
        }}
      />
      
      {!hasValue && (
        <Typography
          variant="h7"
          sx={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'text.primary',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {placeholder}
        </Typography>
      )}

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'grey.900',
              mb: 1,
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'grey.800',
            }
          }
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
          <DateCalendar
            value={getDateFromValue()}
            onChange={handleDateChange}
            sx={{
              '& .MuiPickersCalendarHeader-root': {
                color: 'text.primary',
              },
              '& .MuiDayCalendar-weekDayLabel': {
                color: 'text.secondary',
              },
              '& .MuiPickersDay-root': {
                color: 'text.primary',
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                },
                '&:hover': {
                  bgcolor: 'grey.800',
                }
              },
              '& .MuiPickersYear-yearButton': {
                color: 'text.primary',
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                },
              }
            }}
          />
        </LocalizationProvider>
      </Popover>
    </Box>
  );
};

export default CalendarMetadata;