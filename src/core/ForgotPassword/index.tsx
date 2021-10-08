import { useState } from 'react';
import { useHistory  } from 'react-router';
import { Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import CopyrightComponent from "../components/CopyrightComponent";
import { RequestCode } from './RequestCode';
import { SendCode } from './SendCode';
import { NewPassword } from './NewPassword';

import { useLoadable } from '../../shared/hooks/useLoadable';
import authService, { ResetPasswordRequest } from '../../services/auth.service';
import snackbarStore from '../../shared/components/Snackbar/store';
import { Paths } from '../../routes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
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
    }),
    { index: 1 }
);

const getSteps = () => {
    return ['Введите email', 'Введите полученный код', 'Введите новый пароль'];
}

export const ForgotPassword = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    const [requestingCode, requestCode] = useLoadable<string>(authService.forgotPassword);
    const [checkingCode, checkResetPasswordCode] = useLoadable<string>(authService.checkResetPasswordCode);
    const [resetinPassword, resetPassword] = useLoadable<ResetPasswordRequest>(authService.resetPassword);

    const handleNext = async () => {
        try {
            switch (activeStep) {
                case 0: {
                    await requestCode(email);
                    break;
                }

                case 1: {
                    await checkResetPasswordCode(code);
                    break;
                }

                case 2: {
                    await resetPassword({
                        code,
                        password,
                    });
                    break;
                }

                default:
                    return;
            }

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } catch (e) {
            snackbarStore.show(e.response?.data?.message || 'Произошла ошибка', 'error');
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleLogin = () => history.push(Paths.Login);

    const loading = requestingCode || checkingCode || resetinPassword;

    const getStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return <RequestCode email={email} disabled={loading} onEmailChange={setEmail} />;
            case 1:
                return <SendCode code={code} disabled={loading} onCodeChange={setCode} />
            case 2:
                return <NewPassword password={password} disabled={loading} onPasswordChange={setPassword} />;
            default:
                return 'Неизвестный шаг';
        }
    };

    const hasValue = (step: number) => {
        switch (step) {
            case 0: {
                return email;
            }

            case 1: {
                return code;
            }

            case 2: {
                return password;
            }

            default:
                return;
        }
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '40px'}}>
                {activeStep === steps.length ? (
                    <div style={{textAlign: 'center'}}>
                        <Typography className={classes.instructions}>Ваш пароль был обновлён</Typography>
                            <Button onClick={handleLogin}>
                                Войти
                            </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px'}}>
                            <Button
                                disabled={activeStep === 0 || loading}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Назад
                            </Button>
                            <Button variant="contained" color="primary" disabled={loading || !hasValue(activeStep)} onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Финиш' : 'Далее'}
                            </Button>
                        </div>
                        <Box mt={8}>
                            <CopyrightComponent />
                        </Box>
                    </div>
                )}
            </div>
        </div>
    );
}
