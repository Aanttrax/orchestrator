export interface IResponseAuthService {
  readonly success: boolean;
  readonly response: string;
}

export interface IResponseIsAuthenticated extends Pick<IResponseAuthService, 'success'> {
  readonly response: boolean;
}
