import React, { FC, ChangeEvent } from 'react';
import { Container, Typography, TextField } from "@material-ui/core";

interface Props {
  email: string;
  onEmailChange: (value: string) => void;
  disabled?: boolean;
}

export const RequestCode: FC<Props> = ({ email, disabled, onEmailChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onEmailChange(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <Typography component="h1" variant="h5">
            Восстановление пароля
        </Typography>
        <Typography component="p" style={{marginTop: '20px'}}>
            Введите свой email-адрес и нажмите "далее". Мы вышлем вам код из 4-х символов, который вы введете на следующем этапе
        </Typography>
        <form style={{width: '100%',}} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email адрес"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            disabled={disabled}
            onChange={handleChange}
          />
        </form>
      </div>
    </Container>
  );
};
