import { actions } from "./registrationReducer";
import { IRegisterUser } from "./userRegistrationTypes";

const {
  registrationLoading,
  registrationSuccess,
  registrationFailure
} = actions;



export const registerUser: IRegisterUser = (reqPayload) => {
  return async dispatch => {
    try {
      dispatch(registrationLoading());
      const { default: data } = await import("./fakeUser.json")
      dispatch(registrationSuccess(data))
    } catch (error) {
      dispatch(registrationFailure(error.message.toString()))
    }
  }
}