import { combineReducers } from "redux";
import { reducer as registerReducer } from "./userRegistrationRedux/registerReducer";

const rootReducer = combineReducers({
  userReducer:registerReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;