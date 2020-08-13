import React from "react";

const AlertShowcase = () => (
  <div>
    <div className="row">
      <div className="col s12 m4">
        <div className="">success</div>
      </div>
      <div className="col s12 m4">
        <div className="">danger</div>
      </div>
      <div className="col s12 m4">
        <div className="">warning</div>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m4">
        <div className="">success round</div>
      </div>
      <div className="col s12 m4">
        <div className="">danger round</div>
      </div>
      <div className="col s12 m4">
        <div className="">warning round</div>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m4">
        <div className="">success shadow</div>
      </div>
      <div className="col s12 m4">
        <div className="">round shadow</div>
      </div>
      <div className="col s12 m4">
        <div className="">alert</div>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <strong>Legend</strong>
      </div>
      <div className="col s12">success: green background</div>
      <div className="col s12">warning: yellow background</div>
      <div className="col s12">danger: red background</div>
      <div className="col s12">shadow: shadow</div>
      <div className="col s12">round: round corners</div>
    </div>
  </div>
);

export default AlertShowcase;
