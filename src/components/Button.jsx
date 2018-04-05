// @flow
import React from "react";
import type { ItemsObject } from "../reducers/reducers";
/*
* Dumb component "Button"
* Required props:
* - action - a callback which called after event 'click'
* Optional props:
* - payload - a data which passed to action
* */

type Props = {
  action: Function,
  payload?: number | string | ItemsObject,
  children?: string
};

const Button = (props: Props) => (
  <button onClick={() => props.action(props.payload)}>{props.children}</button>
);

Button.defaultProps = {
  payload: undefined,
  children: undefined
};

export default Button;
