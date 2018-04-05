import { connect } from "react-redux";

import { deleteProduct } from "../actions/actionCreators";
import Button from "../components/Button";

const mapDispatchToProps = dispatch => ({
  action: productId => dispatch(deleteProduct(productId))
});

export default connect(() => ({}), mapDispatchToProps)(Button);
