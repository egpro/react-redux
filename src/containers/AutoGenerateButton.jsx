import { connect } from "react-redux";

import { AUTOFILL_PRODUCTS } from "../actions/actions";
import Button from "../components/Button";

const mapDispatchToProps = dispatch => ({
  action: () => {
    dispatch({ type: AUTOFILL_PRODUCTS });
  }
});

export default connect(() => ({}), mapDispatchToProps)(Button);
