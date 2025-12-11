'use client';
import { CalendarSvg } from "@/assets/icons";
import { TextField, InputAdornment, TextFieldProps } from "@mui/material";
import React, { useRef, useState } from "react";

export interface IInputCalendarProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  value: string;
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
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleTogglePicker = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!inputRef.current) return;

    if (isOpen) {
      inputRef.current.blur();
      setIsOpen(false);
    } else {
      if (typeof inputRef.current.showPicker === 'function') {
        inputRef.current.showPicker();
      } else {
        inputRef.current.focus(); // fallback para Safari
      }
      setIsOpen(true);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <TextField
      {...rest}
      type="date"
      value={value}
      onChange={handleChange}
      inputRef={inputRef}
      onBlur={handleBlur}
      onClick={handleTogglePicker}
      placeholder={placeholder}
      sx={{
        width: '320px',
        '& .MuiOutlinedInput-root': {
          bgcolor: 'grey.900',
          color: 'text.primary',
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
          position: 'relative',
          '&::-webkit-calendar-picker-indicator': {
            display: 'none',
            opacity: 0,
            width: 0,
            height: 0
          },
          '&::-webkit-datetime-edit-text': {
            display: value ? 'inline' : 'none'
          },
          '&::-webkit-datetime-edit-month-field': {
            display: value ? 'inline' : 'none'
          },
          '&::-webkit-datetime-edit-day-field': {
            display: value ? 'inline' : 'none'
          },
          '&::-webkit-datetime-edit-year-field': {
            display: value ? 'inline' : 'none'
          },
          '&::before': {
            content: value ? '""' : `"${placeholder}"`,
            color: 'text.primary',
            position: 'absolute',
            left: 0,
            paddingLeft: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }
        }
      }}
      slotProps={{
        input: {
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
  );
};

export default InputCalendar;
