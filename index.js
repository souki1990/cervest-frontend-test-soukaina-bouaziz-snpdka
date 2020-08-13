import React, { Component } from "react";
import { render } from "react-dom";
import Appbar from "./components/Appbar";
import AlertShowcase from "./components/AlertShowcase";
import Card from "./components/Card";
import Chart from "./components/Chart";
import Table from "./components/Table";
import "./style";

const App = () => (
  <div>
    <Appbar />
    <div className="container">
      <h4>1. Table</h4>
      <Table labels={[]} rows={[]} />
      <h4>2. Chart</h4>
      <Chart labels={[]} datasets={[]} />
      <h4>3. ExtremeEventAlert component</h4>
      <AlertShowcase />
      <h4>4. Card</h4>
      <Card />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
