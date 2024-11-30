process.loadEnvFile();

export interface IEnviroment {
  readonly PORT: string;
  readonly HOST: string;
  readonly SERVICE_AUTH: string;
  readonly SERVICE_TASK: string;
}

if (!process.env.PORT) throw new Error('The environment variable PORT is not defined');
if (!process.env.HOST) throw new Error('The environment variable HOST is not defined');
if (!process.env.SERVICE_AUTH) throw new Error('The environment variable SERVICE_AUTH is not defined');
if (!process.env.SERVICE_TASK) throw new Error('The environment variable SERVICE_TASK is not defined');

export const environment: IEnviroment = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  SERVICE_AUTH: process.env.SERVICE_AUTH,
  SERVICE_TASK: process.env.SERVICE_TASK,
};
