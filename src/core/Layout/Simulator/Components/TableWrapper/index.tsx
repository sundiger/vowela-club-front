import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@material-ui/core/';

const useStyles = makeStyles({
    table: {
        minWidth: 250,
    },
    tableMaster: {
        maxHeight: '200px',
        minHeight: '150px'
    }
});

function createData(ticker: string, size: number, averagePrice: number, dailyPi: number, unrealizedProfit: number, realizedProfit: number,) {
    return { ticker, size, averagePrice, dailyPi, unrealizedProfit, realizedProfit };
}

const rows = [
    createData('AAA', 159, 6.0, 24, 4.0,123),
    createData('AAA', 237, 9.0, 37, 4.3,2),
    createData('AAA', 262, 16.0, 24, 6.0,1),
    createData('AAA', 305, 3.7, 67, 4.3,3),
    createData('AAA', 356, 16.0, 49, 3.9,4),
];

export const TableWrapper = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.tableMaster}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Тикер</TableCell>
                        <TableCell align="right">Размер</TableCell>
                        <TableCell align="right">Средняя цена</TableCell>
                        <TableCell align="right">Дневная пиу</TableCell>
                        <TableCell align="right">Нереализованная прибыль</TableCell>
                        <TableCell align="right">Реализованная прибыль</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.ticker}>
                            <TableCell component="th" scope="row">
                                {row.ticker}
                            </TableCell>
                            <TableCell align="right">{row.size}</TableCell>
                            <TableCell align="right">{row.averagePrice}</TableCell>
                            <TableCell align="right">{row.dailyPi}</TableCell>
                            <TableCell align="right">{row.unrealizedProfit}</TableCell>
                            <TableCell align="right">{row.realizedProfit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
