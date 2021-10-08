import React from 'react';
import { Button, TextField, Typography, makeStyles, Container } from '@material-ui/core';
import {Controller, useForm} from "react-hook-form";
import {FormFields, IFormValues} from "../../Register/interfaces";
import authService from "../../../services/auth.service";
import {SwitchDarkTheme} from "../../components/SwitchDarkTheme";
import SettingsStore from "../../../shared/stores/settingsStore";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    textFieldPass: {
        '& label.Mui-focused': {
            color: SettingsStore.isDarkTheme ? '#e33371' : 'light',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: SettingsStore.isDarkTheme ? '#e33371' : 'light',
            },
        },
    },

}), { index: 1 });

export const Settings = () => {
    const classes = useStyles();

    const { control, handleSubmit, formState: { isValid } } = useForm<IFormValues>({});

    const onSubmit = async (data: IFormValues) => {
        // TODO: добавить лоадер какой-нибудь
        await authService.settings({
            password: data[FormFields.Password],
            newPassword: data[FormFields.NewPassword],
        });
    };

    //switch start


    //switch end

    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h3" style={{textAlign: 'center'}}>
                Настройки
            </Typography>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Изменить пароль
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
                                className={classes.textFieldPass}
                                autoFocus
                                type="password"
                                label="старый пароль"
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name={FormFields.NewPassword}
                        defaultValue=""
                        rules={{ required: true }}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                variant="outlined"
                                required
                                className={classes.textFieldPass}
                                margin="normal"
                                fullWidth
                                label="Новый пароль"
                                type="password"
                                autoComplete="new-password"
                                {...field}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!isValid}
                    >
                        Изменить пароль
                    </Button>
                </form>
            </div>
            <SwitchDarkTheme darkState={SettingsStore.isDarkTheme} handleThemeChange={SettingsStore.toggleDarkTheme} />
        </Container>
    );
}
