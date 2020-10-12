export interface IRegistrationUserData {
  name: string;
  email: string;
  id: string;
}

export interface IUserRegistrationState {
  isLoading: boolean;
  error: string | null;
  userData: IRegistrationUserData | null;
}

export interface IRequestPayload {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IRegisterUser {
  (reqPayload: IRequestPayload): (dispatch: any) => Promise<void>;
}