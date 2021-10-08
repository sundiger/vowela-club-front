import React, { useState } from "react";
import {Switch, Typography, ThemeProvider} from '@material-ui/core';

type SwitchDarkThemeProps = {
    darkState: boolean;
    handleThemeChange: () => void;
};

export const SwitchDarkTheme = ({ darkState, handleThemeChange }: SwitchDarkThemeProps) => {


    return (
    <div>
        <Typography component="h1" variant="h5" style={{textAlign: 'center', marginTop: '50px'}}>
            Тема
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
            <Typography component="h1" variant="h6">
                Светлая
            </Typography>
            <Switch
                checked={darkState}
                onChange={handleThemeChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Typography component="h1" variant="h6">
                Темная
            </Typography>
        </div>
    </div>
    );
}
