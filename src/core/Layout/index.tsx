import React, { FC, useState } from 'react';
import { Switch } from "react-router-dom";

import { RouteWithSubRoutes } from '../../shared/components/RouteWithSubRoutes';
import { NestedRouteBaseProps } from '../../shared/interfaces';

import useStyles from "./style";
import AppBarComponent from "./Dashboard/components/AppBarComponent";
import DrawerComponent from "./Dashboard/components/DrawerComponent";
import {CssBaseline} from "@material-ui/core";

export const Layout: FC<NestedRouteBaseProps> = ({ routes = [] }) => {
  const classes = useStyles();
  //Ф-ция выдвижения левой панели

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBarComponent open={open} onDrawerOpen={handleDrawerOpen} />
        <DrawerComponent open={open} onDrawerClose={handleDrawerClose} />
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
        </main>
    </div>
  );
};
