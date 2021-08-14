import React from "react";

function Success({ msg }) {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {msg}
      </div>
    </div>
  );
}

export default Success;
