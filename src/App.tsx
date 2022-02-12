import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topnav from "components/navfoot/Topnav";
import Info from "./components/staticview/Info";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Info />
    </div>
  );
}

export default App;
