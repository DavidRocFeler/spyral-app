'use client';
import { CalendarSvg } from "@/assets/icons";
import { TextField, InputAdornment, TextFieldProps, Popover, Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { format, parse, isValid } from 'date-fns';

export interface IInputCalendarProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  value: string; // formato: YYYY-MM-DD
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputCalendar = ({
  value,
  onChange,
  placeholder = "DD/MM/YYYY",
  ...rest
}: IInputCalendarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const isOpen = Boolean(anchorEl);

  // Convertir value (YYYY-MM-DD) a Date object
  const getDateFromValue = (): Date | null => {
    if (!value) return null;
    try {
      const parsed = parse(value, 'yyyy-MM-dd', new Date());
      return isValid(parsed) ? parsed : null;
    } catch {
      return null;
    }
  };

  // Formatear la fecha para mostrar
  const getDisplayValue = (): string => {
    const date = getDateFromValue();
    if (!date) return '';
    return format(date, 'dd/MM/yyyy');
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

  // Verificar si hay una fecha seleccionada
  const hasValue = !!value;

  return (
    <Box sx={{ position: 'relative', width: '320px' }}>
      <TextField
        {...rest}
        type="text" // Siempre usar text para evitar el picker nativo
        value={getDisplayValue()}
        onChange={() => {}} // No permitir edición manual
        inputRef={inputRef}
        onClick={handleTogglePicker}
        placeholder="" // Vacío siempre
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            bgcolor: 'grey.900',
            color: hasValue ? 'text.primary' : 'transparent', // Transparente cuando no hay valor
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
            py: 1.5,
            typography: 'h6',
            cursor: 'pointer',
            caretColor: 'transparent', // Sin cursor parpadeante
          }
        }}
        slotProps={{
          input: {
            readOnly: true, // Solo lectura para todos
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
      
      {/* Typography como placeholder visual */}
      {!hasValue && (
        <Typography
          variant="h8"
          sx={{
            position: 'absolute',
            left: '16px', // Mismo padding que el input
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'text.primary',
            pointerEvents: 'none', // Para que no interfiera con los clics
            zIndex: 1,
          }}
        >
          {placeholder}
        </Typography>
      )}

      {/* Popover con DateCalendar para todos los navegadores */}
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
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

export default InputCalendar;