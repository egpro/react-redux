// @flow
import * as React from "react";
/*
* Dumb component
* Requeired props:
* - item - an object of product
* - sorted - an object contains two field:
* -- id - id of field, which data must be sorted
* -- asceding - sorting direction
*
* - sortByField - callback which be called on click by field
* */

type Props = {
  item: {
    label: string,
    id: string
  },
  sorted: {
    by: string,
    asceding: boolean
  },
  sortByField: Function
};

const ARROW_UP = "\u2191";
const ARROW_DOWN = "\u2193";

const HeaderCell = ({ item, sorted, sortByField }: Props): React.Node => {
  let title = item.label;

  if (sorted.by === item.id) {
    title += sorted.asceding ? ARROW_UP : ARROW_DOWN;
  }

  return (
    <th id={item.id} onClick={sortByField}>
      {title}
    </th>
  );
};

export default HeaderCell;
