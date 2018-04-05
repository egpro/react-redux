// @flow
import { connect } from "react-redux";
import { random } from "lodash";

import Button from "../components/Button";
import { addProduct } from "../actions/actionCreators";
import fixture from "../fixtures/orderFixture";

const getRandomId = (): string => {
  const randomNumber = random(fixture.length - 1);

  return fixture[randomNumber].id;
};

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(addProduct(getRandomId()))
});

export default connect(() => ({}), mapDispatchToProps)(Button);
