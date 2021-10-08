import { Button, Box } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import React from "react";
import useStyles from "./style";

export default function Filter() {

    const classes = useStyles();

    return (
        <Box>
            ФИЛЬТР
            <Button variant="contained" className={classes.filter}>СИМВОЛ</Button>
            <Button variant="contained" className={classes.filter}>ИНСТРУМЕНТ</Button>
            <Button variant="contained" className={classes.filter}>НАСТРОЙКИ</Button>
            <Button variant="contained" className={classes.filter}>ОШИБКИ</Button>
            <Button variant="contained" className={classes.filter}>ЗАКАЗЫ</Button>
            <Button variant="contained" className={classes.filter}>СТАТУС</Button>
            Дата фильтра от
            <Button variant="contained" className={classes.filterDate}>
            <DateRangeIcon style={{ marginRight: '10px' }} />
            Выбрать дату
            </Button>
        </Box>
);
}
