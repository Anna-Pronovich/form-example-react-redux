import { RootState } from "..";

export const getUserRegistrationState = (state: RootState) => state.userRegistration;
export const getUserRegistrationLoading = (state: RootState) => getUserRegistrationState(state).isLoading;
export const getUserRegistrationError = (state: RootState) => getUserRegistrationState(state).error;
export const getUserRegistrationUserData = (state: RootState) => getUserRegistrationState(state).userData;
export const getRegistrationUseName = (state: RootState) => getUserRegistrationUserData(state)?.name;