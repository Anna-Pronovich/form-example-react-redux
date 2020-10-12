import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RegistrationPage from "./RegistrationPage";
import {
  getUserRegistrationLoading,
  getUserRegistrationError,
  getUserRegistrationUserData
} from "../../redux/userRegistrationRedux/userRegistrationSelectors";

import { registerUser } from "../../redux/userRegistrationRedux/registrationAction";
import { RootState } from "../../redux";

const mapStateToProps = (state: RootState) => ({
  isLoading: getUserRegistrationLoading(state),
  error: getUserRegistrationError(state),
  userRegisterData: getUserRegistrationUserData(state)
});

const mapDispatchToProps = (dispatch:any) => bindActionCreators({ registerUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);