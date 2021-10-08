import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Grid, Typography, Container, CssBaseline, makeStyles } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import {PricingModal} from "../../components/PricingModal";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}), { index: 1 });

const tiers = [
    {
        title: 'Про',
        price: '5',
        description: [
            '⚜',
            'Инструмент',
            '---',
            'Дневник сделок',
            'Отчеты (3 месяца)',
            'Доступ к справочному центру',
            'Поддержка по электронной почте',
            '⚜',
            'Discord функционал',
            '---',
            'новости',
            'продукты',
            'общий-чат',
            'финансовый-чат',
            '---',
            'Доступ к блоку «Ресурсы»',
            'вопрос-ответ',
            'библиотека',
            'паттерны',
            'твиты фондовых рынков',
            'твиты криптовалюты ',
            '---',
            'Доступ к «Трейдинг»',
            'профиты-лоссы',
            'трекер-ликвидаций',
            '---',
            'Доступ к блоку «Поддержка»',
            'моральная'
        ],
        buttonText: 'Купить',
        buttonVariant: 'outlined',
        funcClick: 'asd',
    },
    {
        title: 'Про +',
        subheader: 'Популярное',
        price: '15',
        description: [
            '⚜',
            'Инструмент',
            '---',
            'Дневник сделок',
            'Отчеты (12 месяцев)',
            'Доступ к справочному центру',
            'Поддержка по электронной почте',
            'Симулятор рынка (Инновационный тренажер, разработанное нашей командой)',
            '⚜',
            'Discord функционал',
            '---',
            'новости',
            'продукты',
            'общий-чат',
            'финансовый-чат',
            '---',
            'Доступ к блоку «Ресурсы»',
            'вопрос-ответ',
            'библиотека',
            'паттерны',
            'твиты фондовых рынков',
            'твиты криптовалюты',
            'сканеры-рынка',
            'твиты премиум',
            '---',
            'Доступ к «Трейдинг»',
            'профиты-лоссы',
            'трекер-ликвидаций',
            'дейтрейдинг',
            '---',
            'Доступ к блоку «Инвестиции»',
            'фондовый рынок',
            'криптовалюты',
            '---',
            'Доступ к блоку «Поддержка»',
            'моральная'
        ],
        buttonText: 'Купить',
        buttonVariant: 'contained',
        funcClick: 'zxc',
    },
    {
        title: 'Премиум',
        price: '30',
        description: [
            '⚜',
            'Инструмент',
            '---',
            'Дневник сделок',
            'Отчеты (24 месяца)',
            'Доступ к справочному центру',
            'Поддержка по электронной почте',
            'Симулятор рынка (Инновационный тренажер, разработанное нашей командой)',
            '⚜',
            'Discord функционал',
            '---',
            'новости',
            'продукты',
            'общий-чат',
            'финансовый-чат',
            '---',
            'Доступ к блоку «Ресурсы»',
            'вопрос-ответ',
            'библиотека',
            'паттерны',
            'твиты фондовых рынков',
            'твиты криптовалюты',
            'сканеры-рынка',
            'твиты премиум',
            '---',
            'Доступ к «Трейдинг»',
            'профиты-лоссы',
            'трекер-ликвидаций',
            'дейтрейдинг',
            'скальпинг',
            'свинг-трейд',
            '---',
            'Доступ к блоку «Инвестиции»',
            'фондовый рынок',
            'криптовалюты',
            '---',
            'Доступ к блоку «Поддержка»',
            'моральная',
            '---',
            'Доступ к блоку «Премиум»',
            '(ЭКСКЛЮЗИВ)',
            'сигналы нейросеть',
            'скальп бот',
            'аналитика',
        ],
        buttonText: 'Купить',
        buttonVariant: 'outlined',
        funcClick: 'qwe',
    },
];


export const Pricing = () => {
    const classes = useStyles();

    return (
        <Container>
            <CssBaseline />

            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Прайс
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Лучший инструмент для анализа твоих действий на рынке
                </Typography>
            </Container>

            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end" style={{display: 'flex', alignItems: 'flex-start'}}>
                    {tiers.map((tier) => (

                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Про +' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            /месяц
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <PricingModal />
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
}
