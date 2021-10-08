import React from 'react';

import useStyles from "./style";
import Table from "../../../shared/components/Table/Table";
import Charts from "../../../shared/components/Charts/Charts";
import Filter from "../../../shared/components/Filter/Filter";
import {CircularProgress, CssBaseline} from "@material-ui/core";

export function Dashboard() {
    const classes = useStyles();

    const [isLoading, setLoading] = React.useState(true);
    const timer = React.useRef<number>();

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    if (isLoading) {
        timer.current = window.setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (
      <div>
          <CssBaseline />

          {isLoading ?
          <div className={classes.progressBackground}>
            <CircularProgress className={classes.progress} />
          </div> :
          [
              <Filter/>,
              <Charts/>,
              //<Table/>
          ]
        }
      </div>
    );
}
