// @flow
import * as React from "react";

import DeleteButton from "../containers/DeleteButton";
import HeaderCell from "./HeaderCell";
import TableCell from "./TableCell";

/*
* Dumb component
* Required props:
* - headers - a scheme of header's titles
* - data - elements of store
* - sorted - an object indicating which field to sort and direction by
* - sortByField -callback which calls to set sorted by field
* */

type Props = {
  headers: Array<Object>,
  data: Array<Object>,
  sorted: Object,
  sortByField: Function
};

class OrderTable extends React.Component<Props> {
  handlerSortByField = (e: Object) => this.props.sortByField(e.target.id);

  render = (): React.Node => (
    <table>
      <thead>
        <tr>
          {this.props.headers.map(item => (
            <HeaderCell
              key={item.id}
              item={item}
              sorted={this.props.sorted}
              sortByField={this.handlerSortByField}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {this.props.data.map(row => (
          <TableCell key={row.id} item={row} headers={this.props.headers}>
            <DeleteButton payload={row.id}>Delete!</DeleteButton>
          </TableCell>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
