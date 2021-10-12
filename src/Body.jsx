import React, { useEffect, useState } from "react";
import Fetch from "./utils/Fetch";

const Body = ({ handleBodyCompState }) => {
  let [sports, setSports] = useState([]);
  useEffect(() => {
    Fetch().then((result) => {
      setSports(result);
    });
  });

  const bindDataToTable = () => {
    let rows = [];
    if (sports.length > 0)
      sports.forEach((element) => {
        rows.push(
          <tr
            onClick={() => {
              handleBodyCompState({ name: element.name, sport: element.name });
            }}
          >
            <th scope="row">{element.id}</th>
            <td>{element.name}</td>
            <td>{element.fans}</td>
            <td>{element.geography}</td>
          </tr>
        );
      });
    return rows;
  };

  return (
    <div className="card-body">
      <div className="card text-center">
        <div className="card-header"> Body</div>
        <div className="card-body" />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Fans</th>
              <th scope="col">Geography</th>
            </tr>
          </thead>
          <tbody>{bindDataToTable()}</tbody>
        </table>
        <div />
      </div>
    </div>
  );
};

export default Body;
