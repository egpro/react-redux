// @flow
import { connect } from "react-redux";
import OrderTable from "../components/OrderTable";
import { sortProductByField } from "../actions/actionCreators";
import schema from "../fixtures/headerSchema";

import type { Item, ItemsIds, State, ItemsObject } from "../reducers/reducers";
/*
* Container passes data to table of order
* */

// This method return an array of product's object from state
const convertOrderToArray = (
  orderIDs: ItemsIds,
  orderItems: ItemsObject
): Array<Item> => orderIDs.map((key: string) => orderItems[key]);

const mapStateToProps = (state: State) => ({
  headers: schema,
  data: convertOrderToArray(state.allItemsIds, state.itemsById),
  sorted: state.sorted
});

const mapDispatchToProps = dispatch => ({
  sortByField: (fieldName: string) => {
    dispatch(sortProductByField(fieldName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
