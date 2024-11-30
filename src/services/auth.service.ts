import axios, { AxiosResponse } from 'axios';
import { environment } from '@env/environment';
import { LoginData } from '@interfaces/loginData.interface';
import { RegisterData } from '@interfaces/registerData.interface';
import { IResponseAuthService } from '@interfaces/authServiceResponse.interface';

const { SERVICE_AUTH } = environment;

const signUp = async (credentials: RegisterData): Promise<string> => {
  try {
    const infoSignUp: AxiosResponse<IResponseAuthService> = await axios.post(`${SERVICE_AUTH}signup`, credentials);
    const { data } = infoSignUp;
    if (!data.success) throw data.response;
    const token = infoSignUp.headers?.['auth-token'];
    if (!token) throw 'Token not providen';
    return token as string;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', error.response?.data?.error || error.message || error.response);
      error.message = error.response?.data?.error || error.message || error.response;
    } else {
      console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', error);
    }
    throw error;
  }
};

const signIn = async (loginData: LoginData): Promise<string> => {
  try {
    const infoSignIn: AxiosResponse<IResponseAuthService> = await axios.post(`${SERVICE_AUTH}signin`, loginData);
    const { data } = infoSignIn;
    if (!data.success) throw data.response;
    const token = infoSignIn.headers?.['auth-token'];
    if (!token) throw 'Token not providen';
    return token as string;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('\x1b[31m%s\x1b[0m', '❌ Error: ', error.response?.data?.error || error.message || error.response);
      error.message = error.response?.data?.error || error.message || error.response;
    } else {
      console.error('\x1b[31m%s\x1b[0m', '❌ An unknown error was thrown. ', error);
    }
    throw error;
  }
};

export default {
  signUp,
  signIn,
};
