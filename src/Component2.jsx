import React from "react";

const Component2 = ({ name, sport }) => {
  return (
    <div className="card-body">
      <div className="card text-center">
        <div className="card-header">Component 2</div>
        <div className="card-body">
          <h5 className="card-title">Thank you!</h5>
          <p />
          <br />
          <p> name : {name}</p>
          <p> Favorite Sport : {sport}</p>
        </div>
      </div>
    </div>
  );
};

export default Component2;
