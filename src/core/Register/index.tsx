import { useForm, Controller } from "react-hook-form";
import { useHistory } from 'react-router';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import authService, { RegisterRequest } from '../../services/auth.service';

import { IFormValues, FormFields } from './interfaces';
import { useStyles } from './styles';
import CopyrightComponent from "../components/CopyrightComponent";
import snackbarStore from '../../shared/components/Snackbar/store';
import { useLoadable } from '../../shared/hooks/useLoadable';
import { Paths } from "../../routes";
import {CssBaseline} from "@material-ui/core";
import React from "react";

export const Register = () => {
    const classes = useStyles();

    const history = useHistory();

    const [loading, register] = useLoadable<RegisterRequest>(authService.register);
    const [loadingVerifying, startVerifying] = useLoadable<string>(authService.startVerifying);

    const { control, handleSubmit, formState: { isValid } } = useForm<IFormValues>({});

    const onSubmit = async (data: IFormValues) => {
        try {
            await register({
                firstName: data[FormFields.FirstName],
                lastName: data[FormFields.LastName],
                username: data[FormFields.Username],
                email: data[FormFields.Email],
                password: data[FormFields.Password],
            });

            await startVerifying(data[FormFields.Email]);

            snackbarStore.show('Проверьте свою почту', 'success');

            history.push(Paths.VerifyEmail);
        }
        catch (e) {
            snackbarStore.show(e.response?.data?.message || 'Произошла ошибка', 'error');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Регистрация
                </Typography>

                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Controller
                                name={FormFields.Username}
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Логин"
                                        autoFocus
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name={FormFields.LastName}
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Фамилия"
                                        autoComplete="family-name"
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name={FormFields.FirstName}
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Имя"
                                        autoComplete="name"
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name={FormFields.Email}
                                defaultValue=""
                                rules={{ required: true }}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Email адрес"
                                        autoComplete="email"
                                        {...field}
                                    />
                                )}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name={FormFields.Password}
                                defaultValue=""
                                rules={{ required: true }}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Пароль"
                                        type="password"
                                        autoComplete="new-password"
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name={FormFields.WantNotifications}
                                defaultValue={false}
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={<Checkbox color="primary" {...field} />}
                                        label="Я хочу получать уведомления по электронной почте."
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name={FormFields.AcceptTermsAndConditions}
                                defaultValue={false}
                                rules={{ required: true }}
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={<Checkbox color="primary" {...field} />}
                                        label="Я принимаю условия использования платформы"
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!isValid || loading || loadingVerifying}
                    >
                        Зарегистрироваться
                    </Button>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Уже есть аккаунт? Войти
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <CopyrightComponent />
            </Box>
        </Container>
    );
};
