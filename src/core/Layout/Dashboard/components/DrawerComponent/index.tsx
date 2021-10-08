import clsx from "clsx";
import {
    Avatar, Collapse,
    Divider, Drawer,
    IconButton, Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Typography
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React, {useState} from "react";
import BusinessIcon from "@material-ui/icons/Business";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ReportIcon from "@material-ui/icons/Report";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import RateReviewIcon from "@material-ui/icons/RateReview";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import {Paths} from "../../../../../routes";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import useStyles from "../../../style";
import {useTheme} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

import authStore from '../../../../../shared/stores/authStore';
import {FormFields} from "../../../../Register/interfaces";
import SettingsStore from "../../../../../shared/stores/settingsStore";

type DrawerProps = {
    open: boolean;
    onDrawerClose: () => void;
};

export default function DrawerComponent ({ open, onDrawerClose }: DrawerProps) {
    const classes = useStyles();
    const theme = useTheme();

    const history = useHistory();
    //Ф-ция выдвижения скрытых блоков в левой панели
    const [openList, setOpenList] = React.useState(true);

    const handleClick = () => {
        setOpenList((prev) => !prev);
    };

    //Ф-ция выдвижения левой панели

    const handleNavigateItemClick = (path: string) => () => history.push(path);

    const handleLogout = () => {
        authStore.logout();

        history.push(Paths.Login);
    };

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar} style={{backgroundColor: '#3f51b5'}}>
                <IconButton onClick={onDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon style={{color: 'white'}} />}
                </IconButton>
            </div>

            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={FormFields.Username} src="/static/images/avatar/1.jpg" className={classes.avatarIcon} />
                </ListItemAvatar>
                <ListItemText
                    primary={FormFields.Username}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                            </Typography>
                            {FormFields.Email}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider />

            <List>
                <ListItem button onClick={handleNavigateItemClick(Paths.Dashboard)}>
                    <ListItemIcon><BusinessIcon/></ListItemIcon>
                    <ListItemText>Журнал</ListItemText>
                </ListItem>
                <ListItem button disabled>
                    <ListItemIcon><EqualizerIcon/></ListItemIcon>
                    <ListItemText>Ежедневник</ListItemText>
                </ListItem>
                <ListItem button disabled>
                    <ListItemIcon><ReportIcon/></ListItemIcon>
                    <ListItemText>Отчеты</ListItemText>
                </ListItem>
                <ListItem button disabled>
                    <ListItemIcon><CalendarViewDayIcon/></ListItemIcon>
                    <ListItemText>Торговый журнал</ListItemText>
                </ListItem>
                <ListItem button onClick={handleNavigateItemClick(Paths.Pricing)}>
                    <ListItemIcon><RateReviewIcon/></ListItemIcon>
                    <ListItemText>Прайс VowelA</ListItemText>
                </ListItem>
                <ListItem button onClick={handleNavigateItemClick(Paths.Simulator)}>
                    <ListItemIcon><ShowChartIcon/></ListItemIcon>
                    <ListItemText>Симулятор</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button onClick={handleClick}>
                    <ListItemIcon><AddToQueueIcon/></ListItemIcon>
                    <ListItemText>Добавить трэйд</ListItemText>
                    {openList ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openList} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button disabled>
                            <ListItemIcon><AccountBalanceIcon/></ListItemIcon>
                            <ListItemText>Что-то будет</ListItemText>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemIcon><AccountBalanceIcon/></ListItemIcon>
                    <ListItemText>Университет VowelA</ListItemText>
                </ListItem>
                <ListItem button>
                    <Link href={'https://discord.gg/FcVZ4Zshnq'} style={{width: '90%', height: '100%', opacity: '0', position: 'absolute'}}>Сообщество</Link>
                    <ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
                    <ListItemText style={{color: SettingsStore.isDarkTheme ? 'white' : 'black'}}>Сообщество VowelA</ListItemText>
                </ListItem>

            </List>
            <Divider />
            <List className={classes.bottomListDrawer}>
                <ListItem button onClick={handleNavigateItemClick(Paths.Settings)}>
                    <ListItemIcon><SettingsIcon/></ListItemIcon>
                    <ListItemText>Настройки</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><HelpOutlineIcon/></ListItemIcon>
                    <ListItemText>Помощь</ListItemText>
                </ListItem>
                <ListItem button onClick={handleLogout}>
                    <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                    <ListItemText>Выйти</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
}
