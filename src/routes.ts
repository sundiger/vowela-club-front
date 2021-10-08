import { ComponentType } from 'react';
import { Layout } from './core/Layout';
import { Login } from './core/Login';
import { Register } from './core/Register';
import { Dashboard } from "./core/Layout/Dashboard";
import { Settings } from './core/Layout/Settings';
import { Pricing } from './core/Layout/Pricing';
import { ForgotPassword } from './core/ForgotPassword';
import { Simulator } from "./core/Layout/Simulator";
import { VerifyEmail } from './core/VerifyEmail';

export enum Paths {
  Base = '/',
  Main = '/main',
  Login = '/login',
  Register = '/register',
  Dashboard = '/dashboard',
  Settings = '/settings',
  Pricing = '/pricing',
  Simulator = '/simulator',
  ForgotPassword = '/forgot-password',
  VerifyEmail = '/verify-email',
}

export interface IRoute {
  path: string;
  component: ComponentType<any>,
  auth?: boolean;
  exact?: boolean;
  redirect?: string;
  routes?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: Paths.Login,
    component: Login,
    exact: true,
  },
  {
    path: Paths.Register,
    component: Register,
    exact: true,
  },
  {
    path: Paths.ForgotPassword,
    component: ForgotPassword,
    exact: true,
  },
  {
    path: Paths.VerifyEmail,
    component: VerifyEmail,
    exact: true,
  },
  {
    path: Paths.Base,
    component: Layout,
    redirect: Paths.Dashboard,
    auth: true,
    routes: [
      {
        path: Paths.Dashboard,
        component: Dashboard,
        exact: true,
        auth: true,
      },
      {
        path: Paths.Pricing,
        component: Pricing,
        exact: true,
        auth: true,
      },
      {
        path: Paths.Settings,
        component: Settings,
        exact: true,
        auth: true,
      },
      {
        path: Paths.Simulator,
        component: Simulator,
        exact: true,
        auth: true,
      }
    ],
  },
];
