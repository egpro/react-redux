// @flow
import { sortBy, reverse, cloneDeep } from "lodash";
import * as actions from "../actions/actions";
import fixture from "../fixtures/orderFixture";
import { loadState } from "../store/localStorage";
import type { Action } from "../actions/actionCreators";

export type ItemsIds = Array<string>;

export type Item = {
  id: string,
  name: string,
  price: number,
  count: number
};

export type ItemsObject = { [string]: Item };

export type State = {
  +itemsById: ItemsObject,
  +allItemsIds: ItemsIds,
  +sorted: {
    +by: string,
    +asceding: boolean
  }
};

const initialState: State = {
  itemsById: {},
  allItemsIds: [],
  sorted: { by: "", asceding: false }
};

const reducers = (
  state: State = loadState() || initialState,
  action: Action
) => {
  switch (action.type) {
    case actions.ADD_PRODUCT: {
      /*
      * Reducer can add new product to the order.
      * If the order has such product, reducer increment "count" field,
      * else it adds a new object to state
      * */

      const newState = cloneDeep(state);
      const product = fixture.find(el => el.id === action.productId);

      if (!newState.allItemsIds.includes(action.productId)) {
        // Push id and an object to store
        newState.itemsById[action.productId] = product;
        newState.allItemsIds.push(action.productId);
      } else {
        // Or increment the counter of this product
        newState.itemsById[action.productId].count += 1;
      }

      return newState;
    }

    case actions.DELETE_PRODUCT: {
      /*
      * Reducer can delete an product object from store
      * At first check that the order state has this product object,
      * then deletes it
      * */
      const newState = cloneDeep(state);

      if (newState.allItemsIds.includes(action.productId)) {
        // Delete from array of ids
        newState.allItemsIds = newState.allItemsIds.filter(
          itemId => itemId !== action.productId
        );

        // Then delete an object of it
        delete newState.itemsById[action.productId];
      }

      return newState;
    }

    case actions.AUTOFILL_PRODUCTS: {
      /*
      * Reducer can fill the table by data of the fixture.
      * First time reducer adds all objects to state,
      * then at second or next time it only increment counters of products.
      * */
      const newState = cloneDeep(state);

      fixture.forEach(item => {
        if (newState.allItemsIds.includes(item.id)) {
          newState.itemsById[item.id].count += 1;
        } else {
          newState.allItemsIds.push(item.id);
          newState.itemsById[item.id] = item;
        }
      });

      return newState;
    }

    case actions.SORT_BY_FIELD: {
      /*
      * Reducer can sort data by a table column.
      * First time sort by asceding, second time by desceding
      * */
      const newState = cloneDeep(state);

      const asceding =
        newState.sorted.by === action.fieldName && !newState.sorted.asceding;

      newState.allItemsIds = sortBy(newState.allItemsIds, id => {
        const element = newState.itemsById[id];
        return element[action.fieldName];
      });

      if (!asceding) {
        newState.allItemsIds = reverse(newState.allItemsIds);
      }

      return { ...newState, sorted: { by: action.fieldName, asceding } };
    }

    case actions.CLEAR_STORE: {
      /*
      * Reducer can clean store by returning a initial state
      * */
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducers;
