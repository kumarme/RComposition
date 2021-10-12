import React, { useState } from "react";
import Body from "./Body";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Container from "./Container";
let initalSportData = { name: "", sport: "" };
const Wrapper = () => {
  let [sportData, setSportData] = useState(initalSportData);
  let [compOneData, setCompOneData] = useState(initalSportData);
  const handleBodyCompState = (sportData) => {
    setSportData(sportData);
  };
  const handleCompOneState = (sportData) => {
    setCompOneData(sportData);
  };
  return (
    <div className="card text-center border-primary">
      <div className="card-header">Popular Sports</div>
      <div className="card-body">
        <Body handleBodyCompState={handleBodyCompState} />
        <div className="row">
          <div className="col-6">
            <Component1
              sportData={sportData}
              handleCompOneState={handleCompOneState}
            />
          </div>
          <div className="col-6 ">
            <Component2 name={compOneData.name} sport={compOneData.sport} />
          </div>
        </div>
        <Container>
          <Component3 />
        </Container>
      </div>
      <div className="card-footer text-muted">Footer</div>
    </div>
  );
};
export default Wrapper;
