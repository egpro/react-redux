// @flow
import * as actions from "./actions";

export type Action = {
  type: string,
  productId?: string,
  fieldName?: string
};

export const addProduct = (productId: string): Action => ({
  type: actions.ADD_PRODUCT,
  productId
});

export const deleteProduct = (productId: string): Action => ({
  type: actions.DELETE_PRODUCT,
  productId
});

export const sortProductByField = (fieldName: string): Action => ({
  type: actions.SORT_BY_FIELD,
  fieldName
});

export const clearStore = (): Action => ({
  type: actions.CLEAR_STORE
});
