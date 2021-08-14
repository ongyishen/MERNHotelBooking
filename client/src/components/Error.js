import React from "react";

function Error({ msg }) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        Something went wrong, please try again. {msg}
      </div>
    </div>
  );
}

export default Error;
