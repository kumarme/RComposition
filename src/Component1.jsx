import React, { useState, useEffect } from "react";

let initalFormData = { name: "", sport: "" };
const handleSubmit = (e) => {
  e.preventDefault();
};

const Component1 = ({ sportData, handleCompOneState }) => {
  let [formData, setFormData] = useState(initalFormData);

  useEffect(() => {
    setFormData(sportData);
  }, [sportData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="card-body">
      <div className="card text-center">
        <div className="card-header">Component 1</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="sport"
                placeholder="Favorite Sport"
                value={formData.sport}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                handleSubmit(e, formData);
                handleCompOneState(formData);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Component1;
