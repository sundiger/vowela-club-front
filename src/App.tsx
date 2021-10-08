import { BrowserRouter as Router, Switch } from "react-router-dom";
import { CssBaseline, StylesProvider, createTheme, ThemeProvider } from '@material-ui/core';

import { RouteWithSubRoutes  } from './shared/components/RouteWithSubRoutes';
import { CustomizedSnackbars } from './shared/components/Snackbar';

import { routes } from './routes';

import {observer} from "mobx-react";
import settingsStore from "./shared/stores/settingsStore";

function App () {
  const palletType = settingsStore.isDarkTheme ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      type: palletType,
    }
  });

  return (
    <StylesProvider injectFirst>
      <CssBaseline />

      <ThemeProvider theme={darkTheme}>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Router>

        <CustomizedSnackbars />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default observer(App);
