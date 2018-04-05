import * as actions from "../actions/actionCreators";
import * as types from "../actions/actions";

describe("actions", () => {
  test("should create an action to adding product", () => {
    const productId = "GeForce FX 6400";
    const expectedAction = {
      type: types.ADD_PRODUCT,
      productId
    };

    expect(actions.addProduct(productId)).toEqual(expectedAction);
  });

  test("should create an action to adding product", () => {
    const productId = "GeForce FX 6400";
    const expectedAction = {
      type: types.DELETE_PRODUCT,
      productId
    };

    expect(actions.deleteProduct(productId)).toEqual(expectedAction);
  });

  test("should sort by field name", () => {
    const fieldName = "name";
    const expectedAction = {
      type: types.SORT_BY_FIELD,
      fieldName
    };

    expect(actions.sortProductByField(fieldName)).toEqual(expectedAction);
  });

  test("should clear store", () => {
    const expectedAction = {
      type: types.CLEAR_STORE
    };

    expect(actions.clearStore()).toEqual(expectedAction);
  });
});
