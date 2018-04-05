/* eslint-disable no-undef */
import { loadState, saveState } from "../store/localStorage";

describe("localStorage API", () => {
  const STATE = "state";

  test("load state from local storage by key", () => {
    loadState();

    expect(localStorage.getItem).toHaveBeenCalledWith(STATE);
  });

  test("return null if local storage doesn't have a key", () => {
    localStorage.clear();
    loadState();

    expect(localStorage.getItem(STATE)).toBe(null);
  });

  test("load state returns undefined if local storage is empty by key", () => {
    localStorage.clear();

    expect(loadState()).toBe(undefined);
  });

  test("load state returns serialize object from local storage", () => {
    const newState = { key_1: 1, key_2: 2 };
    const serializedNewState = JSON.stringify(newState);

    localStorage.setItem(STATE, serializedNewState);

    expect(loadState()).toEqual(newState);
  });

  test("can save state by key", () => {
    localStorage.clear();
    const newState = { key_1: 1, key_2: 2 };
    const serializedState = JSON.stringify(newState);

    saveState(newState);

    expect(localStorage.setItem).toHaveBeenCalledWith(STATE, serializedState);
  });
});
