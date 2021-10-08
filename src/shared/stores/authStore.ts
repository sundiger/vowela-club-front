import { observable, makeObservable, action, reaction  } from "mobx";
import axios from 'axios';

const TOKEN_KEY = 'auth_token';

export class AuthStore {
  token?: string | null;

  constructor() {
    makeObservable(this, {
      token: observable,
      setToken: action,
      init: action,
      logout: action.bound,
    });

    this.init();

    reaction(
      () => this.token,
      token => this.setAuthHeaders(token),
    );
  }

  setToken(token: string) {
    this.token = token;

    localStorage.setItem(TOKEN_KEY, this.token);
  }

  init() {
    this.token = localStorage.getItem(TOKEN_KEY);
  }

  logout() {
    this.token = null;

    localStorage.removeItem(TOKEN_KEY);
  }

  private setAuthHeaders(token?: string | null) {
    axios.defaults.headers.common['Authorization'] = token;
  }
}

export default new AuthStore();
