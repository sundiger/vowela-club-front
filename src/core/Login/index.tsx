import React from 'react';
import { useHistory } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Avatar,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    Box,
    Link, CssBaseline
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import CopyrightComponent from "../components/CopyrightComponent";
import {FormFields, IFormValues} from "../Register/interfaces";
import {Paths} from "../../routes";
import { useLoadable } from '../../shared/hooks/useLoadable';

import authService, { LoginRequest, LoginResponse } from "../../services/auth.service";

import authStore from '../../shared/stores/authStore';
import snackbarStore from '../../shared/components/Snackbar/store';
import { HttpResponse  } from '../../shared/interfaces';
import useStyles from "./style";
import portfolioService from "../../services/portfolio.service";

export const Login = () => {
    const classes = useStyles();

    const history = useHistory();

    const [loading, login] = useLoadable<LoginRequest, HttpResponse<LoginResponse>>(authService.login);
    //портфель
    const [loadingPortfolio, validatePortfolio] = useLoadable<number>(portfolioService.validatePortfolio);

    const { control, handleSubmit, formState: { isValid } } = useForm<IFormValues>({});

    const onSubmit = async (data: IFormValues) => {
        try {
            const response = await login({
                username: data[FormFields.Username],
                password: data[FormFields.Password],
            });

            authStore.setToken(response.data.jwtToken);

            validatePortfolio(response.data.id);



            history.push(Paths.Dashboard);
        } catch (e) {
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
                    Авторизация
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name={FormFields.Username}
                        defaultValue=""
                        rules={{ required: true }}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                variant="outlined"
                                required
                                margin="normal"
                                fullWidth
                                autoFocus
                                label="Логин"
                                autoComplete="username"
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name={FormFields.Password}
                        defaultValue=""
                        rules={{ required: true }}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                variant="outlined"
                                required
                                margin="normal"
                                fullWidth
                                label="Пароль"
                                type="password"
                                autoComplete="new-password"
                                {...field}
                            />
                        )}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Запомнить меня"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!isValid || loading || loadingPortfolio}
                    >
                        Войти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href={Paths.ForgotPassword} variant="body2">
                                Забыли пароль?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={Paths.Register} variant="body2">
                                Нет аккаунта? Зарегистрироваться
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <CopyrightComponent />
            </Box>
        </Container>
    );
}
