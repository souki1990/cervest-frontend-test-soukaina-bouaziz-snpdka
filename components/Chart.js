import React, { Component ,useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";

const chartConfigOptions = {
    type: 'line',
    data: {},
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}

const colorOptions={"R1":"purple","R2":"pink","R3":"green"}

const Chart = (props) => {

const refChart = useRef();
const [chartConfig, setChartConfig] = useState(chartConfigOptions);
const [chartInstance, setChartInstance] = useState();

useEffect(() => {
  if(props.data) {
  chartConfig.data.labels = props.data.labels;
  chartConfig.data.datasets= Object.keys(props.data.regions).map(key=>({label:key,data:props.data.regions[key],backgroundColor:["transparent"],
      borderColor: colorOptions[key]}))
  }
},[props.data])

useEffect(()=>{
  if(refChart && refChart.current){
   const chart = new Chartjs(refChart.current,chartConfig)
   setChartInstance(chart)
  }
},[refChart,chartConfig])

return (
<canvas ref={refChart}>Chart</canvas>)
}

export default Chart;


