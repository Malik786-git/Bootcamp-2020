import React from "react";
import { laptopDetail } from "./Laptop";
const Feature = () => {
  return (
    <React.Fragment>
      <laptopDetail.Consumer>
        {(data) => (
          <ul>
            <li>Company: {data.company}</li>
            <li>Processor: {data.processor}</li>
            <li>Generation: {data.generation}</li>
          </ul>
        )}
      </laptopDetail.Consumer>
    </React.Fragment>
  );
};

export default Feature;
