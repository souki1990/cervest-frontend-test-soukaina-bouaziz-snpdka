import React , { useState, useEffect , memo}from "react";

const Table = (props) => {
  const data = props.data

  return (
    <>
  <h4>1. Table</h4>
  <div className="row">
    <div className="col s12">
      <table>
        <thead>
          <tr>
          <th>Regions</th>
          {data && data.labels.map(h => <th>{h}</th>)}</tr>
        </thead>
     {data &&
            Object.keys(data.regions).map(key => (
              <tr>
                <th>{key}</th>
                {data.regions[key].map(col => (
                  <td>{col}</td>
                ))}
              </tr>
              ))}
      </table>

    </div>
  </div>
  </>)
};

export default memo(Table);
