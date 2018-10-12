import React from "react";
import ReactDOM from "react-dom";
import Home from './home/homeContainer.js';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));