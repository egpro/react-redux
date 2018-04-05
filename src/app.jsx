import React from "react";

import Order from "./containers/Order";
import AutoGenerateButton from "./containers/AutoGenerateButton";
import AddButton from "./containers/AddButton";
import ClearButton from "./containers/ClearButton";
import SaveButton from "./containers/SaveButton";

const App = () => (
  <div>
    <AutoGenerateButton>Autofill table!</AutoGenerateButton>
    <AddButton>Add random product</AddButton>
    <ClearButton>Clear!</ClearButton>
    <SaveButton>Send To Server!</SaveButton>
    <Order />
  </div>
);

export default App;
