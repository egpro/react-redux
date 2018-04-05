// @flow
import * as React from "react";
/*
* Dumb component is for displaying data
* Requeired props:
* - item - an object of an element of data
* - header - an object of the scheme which show how to display an element
* - children - component, for exmaple, it may be a button or other
* */

type Props = {
  headers: Array<{
    id: string,
    label: string
  }>,
  item: Object,
  children?: React.Node
};

const TableCell = ({ item, headers, children }: Props): React.Node => (
  <tr>
    {[
      headers.map(field => <td key={field.id}>{item[field.id]}</td>),
      <td key="del">{children}</td>
    ]}
  </tr>
);

TableCell.defaultProps = {
  children: undefined
};

export default TableCell;
