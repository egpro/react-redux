import reducers from "../reducers/reducers";
import * as actions from "../actions/actions";
import fixture from "../fixtures/orderFixture";

describe("reducers", () => {
  const initialState = {
    itemsById: {},
    allItemsIds: [],
    sorted: {
      by: "",
      asceding: false
    }
  };

  const fillState = () => {
    const products = {};
    const productIds = [];

    fixture.forEach(el => {
      products[el.id] = el;
      productIds.push(el.id);
    });

    return {
      products,
      productIds
    };
  };

  test("should return initial state", () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  test("should add order by product id", () => {
    const productId = "P3700";
    const product = fixture.find(el => el.id === productId);

    const action = {
      type: actions.ADD_PRODUCT,
      productId
    };

    expect(reducers(initialState, action)).toEqual({
      ...initialState,
      itemsById: { [productId]: product },
      allItemsIds: [productId]
    });
  });

  test("should increment count by adding existed product", () => {
    const productId = "P3700";

    const action = {
      type: actions.ADD_PRODUCT,
      productId
    };

    const state = {
      ...initialState,
      itemsById: {
        [productId]: { ...fixture[productId], count: 2 }
      },
      allItemsIds: [productId]
    };

    expect(reducers(state, action)).toEqual({
      ...state,
      itemsById: {
        [productId]: { ...fixture[productId], count: 3 }
      }
    });
  });

  test("should delete order by id", () => {
    const productId = "AM1M-A";
    const productIdWithoutDelete = "P3700";
    const deleteAction = {
      type: actions.DELETE_PRODUCT,
      productId
    };
    const state = {
      ...initialState,
      itemsById: {
        [productId]: fixture[productId],
        [productIdWithoutDelete]: fixture[productIdWithoutDelete]
      },
      allItemsIds: [productId, productIdWithoutDelete]
    };

    expect(reducers(state, deleteAction)).toEqual({
      ...state,
      itemsById: { [productIdWithoutDelete]: fixture[productIdWithoutDelete] },
      allItemsIds: [productIdWithoutDelete]
    });
  });

  test("return old state when product does not exist ", () => {
    const productId = "A4-5300";
    const deleteAction = {
      type: actions.DELETE_PRODUCT,
      productId
    };
    expect(reducers(initialState, deleteAction)).toEqual(initialState);
  });

  test("can autofill state from fixture", () => {
    const action = { type: actions.AUTOFILL_PRODUCTS };
    const { products, productIds } = fillState();

    const newState = reducers(initialState, action);

    expect(newState.allItemsIds).toHaveLength(productIds.length);
    expect(newState.allItemsIds).toEqual(expect.arrayContaining(productIds));

    expect(newState.itemsById).toEqual(products);
  });

  test("should sort product by name", () => {
    const products = {};
    const fieldName = "name";
    const arrayIds = ["i9-7980XE", "AM1M-A", "Micron 1100"];
    arrayIds.forEach(id => (products[id] = fixture.find(el => el.id === id)));

    const sortedAction = {
      type: actions.SORT_BY_FIELD,
      fieldName
    };

    const state = {
      ...initialState,
      itemsById: products,
      allItemsIds: arrayIds
    };

    const sortedProductIds = ["i9-7980XE", "Micron 1100", "AM1M-A"];

    expect(reducers(state, sortedAction)).toEqual({
      ...state,
      allItemsIds: sortedProductIds,
      sorted: {
        by: fieldName,
        asceding: false
      }
    });
  });

  test("should clean state", () => {
    const action = { type: actions.CLEAR_STORE };
    const { products, productIds } = fillState();

    const state = {
      ...initialState,
      itemsById: products,
      allItemsIds: productIds
    };

    expect(reducers(state, action)).toEqual(initialState);
  });
});
