import axios from 'axios';

import { HttpResponse } from '../shared/interfaces';

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  firstName: string;
  lastName: string;
  jwtToken: string;
}

export interface ResetPasswordRequest {
  code: string;
  password: string;
}

interface SettingsReponse {
  password: string;
  newPassword: string;
}

export class AuthService {
  register(data: RegisterRequest) {
    return axios.post('/users/register/', data);
  }

  login(data: LoginRequest): Promise<HttpResponse<LoginResponse>> {
    return axios.post('/users/authenticate/', data);
  }

  settings(data: SettingsReponse) {
    return axios.post('/users/settings/', data);
  }

  startVerifying(email: string) {
    return axios.get(`/users/startverifying?email=${email}`);
  }

  verifyAccount(code: string) {
    return axios.get(`/users/verifyaccount?code=${code}`);
  }

  forgotPassword(email: string) {
    return axios.post(`/users/forgotpassword?email=${email}`);
  }

  checkResetPasswordCode(code: string) {
    return axios.get(`/users/checkresetpasswordcode?code=${code}`);
  }

  resetPassword(data: ResetPasswordRequest) {
    return axios.post('/users/resetpassword/', data);
  }

  authenticate() {}
}

export default new AuthService();
