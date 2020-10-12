import { combineReducers } from "redux";
import { reducer as registrationReducer } from "./userRegistrationRedux/registrationReducer";

const rootReducer = combineReducers({
  userRegistration :registrationReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;