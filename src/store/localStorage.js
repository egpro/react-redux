// @flow
/* globals localStorage */

import type { State } from "../reducers/reducers";

export const loadState = (): State | void => {
  try {
    // Try to read state from local storage
    const serializeState: any = localStorage.getItem("state");

    if (serializeState === null) {
      return undefined;
    }

    return JSON.parse(serializeState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state: State) => {
  try {
    const serializeState: string = JSON.stringify(state);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.debug(e);
  }
};
