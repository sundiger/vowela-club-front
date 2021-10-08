import React, { FC, ChangeEvent } from 'react';
import { Container, Typography, TextField } from '@material-ui/core';

interface Props {
  password: string;
  onPasswordChange: (value: string) => void;
  disabled?: boolean;
}

export const NewPassword: FC<Props> = ({ password, disabled, onPasswordChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <Typography component="h1" variant="h5">
          Восстановление пароля
        </Typography>
        <Typography component="p" style={{marginTop: '20px'}}>
          Придумайте и введите новый пароль
        </Typography>
        <form style={{width: '100%',}} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Новый пароль"
            name="password"
            autoFocus
            type="password"
            value={password}
            onChange={handleChange}
            disabled={disabled}
          />
        </form>
      </div>
    </Container>  
  );
};
