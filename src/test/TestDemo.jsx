import React from "react";
import "./Data";
import { Data } from "./Data";

const TestDemo = () => {
  return (
    <div class="bg-secondary vh-100">
      <h1>Sample Map</h1>
      <div className="mapdivtest">
        {Data.map((item) => (
          <div className="insidemapdivtest">
            <div class="card">
              <div class="card-body">
                <h3>Name - {item.namee}</h3>
                <h3>Age - {item.age}</h3>
                <h3>City - {item.city}</h3>
                <h3>Occupation - {item.occupation}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestDemo;
