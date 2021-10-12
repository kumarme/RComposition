import React from "react";
const Container = (props) => {
  const prop1 = "Prop1";
  const prop2 = "Prop2";

  const { children } = props;

  const component3 = React.Children.map(children, (child) =>
    React.cloneElement(child, { prop1: prop1, prop2: prop2 })
  );

  return (
    <div className="card-body">
      <div className="card text-center">
        <div className="card-header">Container</div>
        <div className="card-body">{component3}</div>
      </div>
    </div>
  );
};

export default Container;
