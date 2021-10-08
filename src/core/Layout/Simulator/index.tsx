import React, {useEffect, useState} from 'react';
import {CircularProgress, Typography, Button, Grid, InputAdornment, MenuItem, Paper, Slider, TextField} from "@material-ui/core";
import SettingsStore from "../../../shared/stores/settingsStore";
import useStyles from "./style";
import TickerTapeWrapper from "./Components/TickerTapeWrapper";
import SymbolInfoWrapper from "./Components/SymbolInfoWrapper";
import RealTimeChartWrapper from "./Components/RealTimeChartWrapper";
import {TableWrapper} from "./Components/TableWrapper";
import {useLoadable} from "../../../shared/hooks/useLoadable";
import portfolioService from "../../../services/portfolio.service";

const balanceBtc: number = 3
const balanceUsd: number = 32

// const tallage = 35;
// const result = balanceBtc / 100 * tallage; //вычисление процентов
// console.log(tallage + '% от ' + money + ' будет ' + result);
const currencies = [
    {
        value: 'USD',
        label: 'USD',
    },
    {
        value: 'BTC',
        label: 'BTC',
    },
];

const marks = [
    {
        value: 0,
        label: '0%',
    },
    {
        value: 25,
        label: '25%',
    },
    {
        value: 50,
        label: '50%',
    },
    {
        value: 75,
        label: '75%',
    },
    {
        value: 100,
        label: '100%',
    },
];


export const Simulator = () => {
    const classes = useStyles();

    const [currency, setCurrency] = useState('USD');
    // const [loadingPortfolio, validatePortfolio] = useLoadable<number>(portfolioService.validatePortfolio);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    function valuetext(value: number) {
        return `${value}%`;
    }

    //start
    const [isLoading, setLoading] = React.useState(true);
    const timer = React.useRef<number>();

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    if (isLoading) {
        timer.current = window.setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    //end

    return (
        <Grid container spacing={3}>
            {isLoading ?
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CircularProgress/>
                </div>
                :
                [
                    <div style={{zIndex: 9, position: 'absolute', width: '100%', height: '90%', left: 0}}/>,
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TickerTapeWrapper theme={SettingsStore.isDarkTheme ? 'dark' : 'light'}/>
                    </Grid>,
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{display: 'flex', flexDirection: 'column'}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{zIndex: 10}}>
                            <RealTimeChartWrapper theme={SettingsStore.isDarkTheme ? 'dark' : 'light'}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{zIndex: 1}}>
                            <SymbolInfoWrapper theme={SettingsStore.isDarkTheme ? 'dark' : 'light'}/>
                        </Grid>
                    </Grid>,
                    <Grid xs={12} sm={12} md={12} lg={6} xl={6}
                          container
                          direction="row"
                          justifyContent="center"
                          style={{zIndex: 10}}
                          alignItems="flex-start">
                        {/*Первая карточка маркет старт*/}
                        <Grid item className={classes.rate} xs={12} sm={12} md={6} lg={12} xl={6}>
                            <Paper elevation={2} style={{width: '100%'}}>
                                <Typography>
                                    Маркет
                                </Typography>
                                <form className={classes.priceStyle} noValidate autoComplete="off">
                                    <Grid>
                                        <TextField
                                            id="outlined-basic"
                                            style={{
                                                width: '100%',
                                                borderColor: SettingsStore.isDarkTheme ? '#e33371' : 'black'
                                            }}
                                            className={classes.textFieldCard1}
                                            label="Кол-во"
                                            variant="outlined"
                                            type='number'
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <TextField onChange={handleChange} value={currency} select>
                                                            {currencies.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Slider
                                            defaultValue={25}
                                            getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            className={classes.sliderCard1}
                                            step={1}
                                            min={0}
                                            max={100}
                                            marks={marks}
                                        />
                                    </Grid>
                                    <Grid style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Typography style={{fontSize: '12px'}}>Купить 0.00 {currency}</Typography>
                                        <Typography style={{fontSize: '12px'}}>Продать 0.00 {currency}</Typography>
                                    </Grid>
                                    <Grid style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Button variant="contained" color="primary">
                                            Купить/Лонг
                                        </Button>
                                        <Button variant="contained" color="secondary">
                                            Продать/Шорт
                                        </Button>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                        {/*Первая карточка маркет конец*/}

                        <Grid item className={classes.rate} xs={12} sm={12} md={6} lg={12} xl={6}>
                            <Paper elevation={2} style={{width: '100%'}}>
                                <Typography>
                                    Баланс
                                </Typography>
                                <Typography>
                                    Спот
                                </Typography>
                                <Typography variant="h4">
                                    Баланс аккаунта
                                </Typography>
                                <Typography variant="h4"
                                            style={{color: '#4caf50', display: 'flex', alignItems: 'flex-end'}}>
                                    {currency === 'USD' ? balanceUsd : balanceBtc}
                                    <Typography>
                                        {currency}
                                    </Typography>
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item className={classes.rate} xs={12} sm={12} md={6} lg={12} xl={12}>
                            <TableWrapper/>
                        </Grid>

                    </Grid>,

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{zIndex: 10}}>
                        <Paper style={{width: '100%', height: '160px', overflow: 'auto'}}>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                            <Typography>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Typography>
                        </Paper>
                    </Grid>
                ]}
        </Grid>
    );
}
