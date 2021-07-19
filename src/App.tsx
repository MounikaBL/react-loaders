import React, { useState } from 'react';
import './App.scss';
import Loader from './Loader';

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
}]

const App: React.FC<any> = (props: any) => {
  const [index, setIndex] = useState(1);
  return (
    <div className="wrapper" >
      <div className="heading">Loaders</div>
      <div className="nav-bar">
        <ul className="list">
          {
            loaders.map((loader: any, Iindex: number) => {
              return (
                <li key={loader.id} onClick={(e: any) => {
                  setIndex(Iindex + 1);
                }}
                  className={`list-item ${Iindex + 1 === index ? "active" : ""}`}>{loader.name}</li>);
            })
          }
        </ul>
      </div>
      <div className="loaders">
        <Loader index={index} />
      </div>
    </div >
  );
}

export default App;
