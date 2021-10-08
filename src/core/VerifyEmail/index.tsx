import { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router';
import { Container, Typography, TextField, Button } from '@material-ui/core';

import authService from '../../services/auth.service';
import { useLoadable } from '../../shared/hooks/useLoadable';
import snackbarStore from '../../shared/components/Snackbar/store';
import { Paths } from '../../routes';

import { useStyles } from './styles';

export const VerifyEmail = () => {
  const classes = useStyles();

  const [code, setCode] = useState('');

  const history = useHistory();

  const [loading, verifyAccount] = useLoadable<string>(authService.verifyAccount);

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();

      await verifyAccount(code);

      history.push(Paths.Dashboard);
    } catch (e) {
      snackbarStore.show(e.response?.data?.message || 'Произошла ошибка', 'error');
    }
  }

  return (
    <Container>
      <div className={classes.content}>
        <div className={classes.textWrapper}>
          <Typography component="h1" variant="h5">
            Подтверждение e-mail
          </Typography>

          <Typography component="p" className={classes.text}>
            Для подтверждения e-mail введите код, полученный на почту.
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Код подтверждения"
              autoFocus
              value={code}
              onChange={handleCodeChange}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitBtn}
              disabled={!code || loading}
            >
              Подтвердить
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};
