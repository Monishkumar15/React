import React from "react";

const Hoc = (WrappedContent) => {
  return function (props) {
    return (
      <>
        <p>This is message from  HOC Componentfunctions</p>
        <WrappedContent {...props} />
      </>
    );
  };
};

export default Hoc;
