import React, { FC, ChangeEvent } from 'react';
import { Container, Typography, TextField } from '@material-ui/core';

interface Props {
  code: string;
  onCodeChange: (value: string) => void;
  disabled?: boolean;
}

export const SendCode: FC<Props> = ({ code, onCodeChange, disabled }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCodeChange(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <Typography component="h1" variant="h5">
          Восстановление пароля
        </Typography>
        <Typography component="p" style={{marginTop: '20px'}}>
          Введите код, полученный по email. Если вы его всё еще не получили, то проверьте папку "спам".
        </Typography>
        <form style={{width: '100%',}} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="code"
            label="Код"
            name="code"
            autoFocus
            value={code}
            disabled={disabled}
            onChange={handleChange}
          />
        </form>
      </div>
    </Container>
  );
}