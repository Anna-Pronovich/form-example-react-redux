import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  userData: {
    firstName: '',
    lastName: '',
    email: '',
  }
}

const registerReducer = createSlice({
  name: 'userRegistration',
  initialState: INITIAL_STATE,
  reducers: {
    registerSuccess: (state, action) => {
      return { ...state, userData: action.payload }
    },
  }
})

export const { actions, reducer } = registerReducer;