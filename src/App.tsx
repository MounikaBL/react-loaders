import React from "react";
import "./App.scss";
import Loader from "./Loader";

const loaders = [{
  name: "Loader 1", id: 1
}, {
  name: "Loader 2", id: 2
}, {
  name: "Loader 3", id: 3
}, {
  name: "Loader 4", id: 4
}, {
  name: "Loader 5", id: 5
}, {
  name: "Loader 6", id: 6
}];

const App: React.FC<any> = (props: any) => {
  return (
    <div className="wrapper" >
      <div className="header">
        <h2>Loaders</h2>
      </div>
      <div className="loaders">
        <Loader loaders={loaders} />
      </div>
    </div >
  );
}

export default App;
