import { FC } from 'react';
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { observer } from 'mobx-react';

import { IRoute, Paths } from '../../routes';

import authStore from '../stores/authStore';

export const RouteWithSubRoutes: FC<IRoute> = observer((route) => {
  return (
    <Route
      path={route.path}
      render={(props) => {
        const children = <route.component {...props} routes={route.routes} />;

        if (route.auth) {
          return authStore.token
            ? children
            : <Redirect to={Paths.Login} />;
        }

        return children;
      }}
    />
  );
});
