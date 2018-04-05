import { connect } from "react-redux";
import { saveToServer } from "../utils";
import Button from "../components/Button";

const mapStateToProps = state => ({
  payload: state.itemsById
});

const mapDispatchToProps = () => ({
  action: payload => saveToServer(payload)
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
