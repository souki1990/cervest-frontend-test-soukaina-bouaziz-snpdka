import React from "react";

const Table = ({ labels, rows }) => (
  <div className="row">
    <div className="col s12">
      <table>
        <thead>
          <tr>{labels && labels.map(h => <th>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows &&
            rows.map(cols => (
              <tr>
                {cols.map(col => (
                  <td>{col}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Table;
