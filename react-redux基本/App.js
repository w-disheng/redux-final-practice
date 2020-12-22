import React from "react";
import store from "./redux/store";

import Count from "./containers/count";
function App() {
  return (
    <div>
      <Count store={store} />
    </div>
  );
}

export default App;
