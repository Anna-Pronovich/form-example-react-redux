import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IUserRegistrationState,
  IRegistrationUserData
} from "./userRegistrationTypes";


const INITIAL_STATE: IUserRegistrationState = {
  isLoading: false,
  error: null,
  userData: {
    name:'',
    email: '',
    id:'',
  }
}

const registrationReducer = createSlice({
  name: 'userRegistration',
  initialState: INITIAL_STATE,
  reducers: {
    registrationLoading: (state: IUserRegistrationState) => {
      return {
        ...state,
        isLoading: true
      }
    },
    registrationSuccess: (state: IUserRegistrationState, action: PayloadAction<IRegistrationUserData>) => {
      return { ...state, userData: action.payload }
    },
    registrationFailure: (state: IUserRegistrationState, action: PayloadAction<string>) => {
      return { ...state, error: action.payload }
    }
  }
})

export const { actions, reducer } = registrationReducer;