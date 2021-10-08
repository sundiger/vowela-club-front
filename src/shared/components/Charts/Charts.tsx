import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { Line, Bar, PolarArea } from 'react-chartjs-2';
import useStyles from "./style";

export default function Charts() {

    const classes = useStyles();

    return (
    <Grid container spacing={1} style={{marginTop: '20px'}}>
        <Grid item xs={12} md={4} lg={4}>
            Чистая прибыль/убыток 234 $
            <Paper className={classes.paper}>
                <Line
                    data={{
                        labels: ['', '', '', '', '', '', ''],
                        datasets: [{
                            label: 'Общая прибыль',
                            data: [1, 5, 3, 5, 4, 10, 15],
                            backgroundColor: [
                                'rgba(0,0,255,.5)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                            ],
                            borderWidth: 0,
                            backdropColor: 'blue',
                            drawOnChartArea: false,
                            fill: true,
                        },
                            {
                                label: 'Общий убыток',
                                data: [15, 10, 4, 5, 3, 5, 1],
                                backgroundColor: [
                                    'rgba(255,0,0,.5)',
                                ],
                                fill: true,
                                display: false,
                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio: false,
                    }}
                />
            </Paper>
            Всего сделок: 5
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
            Коэффициент выигрыша
            <Paper className={classes.paper}>
                <Bar
                    data={{
                        labels: [['Победы' + ' $'], ['Проигрыши' + ' $']],
                        datasets: [{
                            label: 'коэффициент выигрыша',
                            data: [15, 5],
                            backgroundColor: [
                                'rgba(0,0,255,.5)',
                                'rgba(255,0,0,.7)',
                            ],
                            borderWidth: 0,
                            backdropColor: 'blue',
                            drawOnChartArea: false,
                            fill: true,
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false,
                    }}
                />
            </Paper>
            Победы: Проигрыши:
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
            Дневная прибыль
            <Paper className={classes.paper}>
                <PolarArea
                    data={{
                        labels: ['Победы', 'Проигрыши'],
                        datasets: [{
                            label: 'прибыль/убыток за день',
                            data: [15, 5],
                            backgroundColor: [
                                'rgba(0,0,255,.5)',
                                'rgba(255,0,0,.7)',
                            ],
                            borderWidth: 0,
                            backdropColor: 'blue',
                            drawOnChartArea: false,
                            fill: true,
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false,
                    }}
                />
            </Paper>
            Дневная прибыль

        </Grid>
    </Grid>
    );
}
