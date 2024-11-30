process.loadEnvFile();

export interface IEnviroment {
  readonly PORT: string;
  readonly HOST: string;
}

if (!process.env.PORT) throw new Error('The environment variable PORT is not defined');
if (!process.env.HOST) throw new Error('The environment variable HOST is not defined');

export const environment: IEnviroment = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
};
