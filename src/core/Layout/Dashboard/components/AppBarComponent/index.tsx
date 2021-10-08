import clsx from "clsx";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, {useState} from "react";
import useStyles from "../../../style";


type AppBarProps = {
    open: boolean;
    onDrawerOpen: () => void;
};

export default function AppBarComponent({ open, onDrawerOpen }: AppBarProps) {
    const classes = useStyles();

        return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h3" noWrap>
                    VowelA Club
                </Typography>
            </Toolbar>
        </AppBar>
        );
}
