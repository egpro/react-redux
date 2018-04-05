import { connect } from "react-redux";

import Button from "../components/Button";
import { clearStore } from "../actions/actionCreators";

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(clearStore())
});

export default connect(() => ({}), mapDispatchToProps)(Button);
