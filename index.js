import React, { Component, useState, useEffect, useMemo } from "react";
import { render } from "react-dom";
import Appbar from "./components/Appbar";
import AlertShowcase from "./components/AlertShowcase";
import Card from "./components/Card";
import Chart from "./components/Chart";
import Table from "./components/Table";
import { getData } from "./utils/api";
import { toTableFormat} from "./utils/transform"
import "./style";

const App = () => {

const [data, setData ] = useState();
const [processedData, setProcessedData ] = useState();


const loadData = async() => {
const data = await getData();
if(!data.error) {
  setData(data);
 }
}

useEffect(() => {
  loadData();
},[])

 useMemo(() => {
   if (data){
     console.log("data dswsghg use memor",data)
  const transformedData = toTableFormat(data);
  setProcessedData({regions:transformedData.regions,labels:transformedData.labels})
  }
}, [data]);
 

return(
  <div>
    <Appbar />
    <div className="container">
      { processedData &&  <Table data={processedData}/>}
      <h4>2. Chart</h4>
     { processedData && <Chart  data={processedData} />}
      <h4>3. ExtremeEventAlert component</h4>
      <AlertShowcase />
      <h4>4. Card</h4>
      <Card />
    </div>
  </div>
)
};

render(<App />, document.getElementById("root"));
