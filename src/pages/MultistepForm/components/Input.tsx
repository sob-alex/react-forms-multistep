import React, { forwardRef, FC } from 'react';
import TextField from '@material-ui/core/TextField';

interface InputProps {
  [index: string]: any
}

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  return (
    <TextField
      variant='outlined'
      margin='normal'
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});
