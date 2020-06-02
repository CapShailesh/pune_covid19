import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Everyday from "./EverydayBar";
import RecoveredBar from "./RecoveredBar";
import DeceasedBar from "./DeceasedBar";
import ActiveLine from "./ActiveLine";
import TotalPositive from "./TotalPositiveLine";
import Compare from "./Compare";

function All(props) {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem active>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>Confirmed Positive </h3>
        <hr></hr>
      </div>
      <Everyday />
      <br />
      <div className="col-12">
        <h3>Recovered </h3>
        <hr></hr>
      </div>
      <RecoveredBar />
      <br />
      <div className="col-12">
        <h3>Deceased </h3>
        <hr></hr>
      </div>
      <DeceasedBar />
      <br />
      <div className="col-12">
        <h3>Active</h3>
        <hr></hr>
      </div>
      <ActiveLine />
      <br />
      <div className="col-12">
        <h3>Total Positive</h3>
        <hr></hr>
      </div>
      <TotalPositive />
      <br />
      <div className="col-12">
        <h3>Confirmed vs Recovered</h3>
        <hr></hr>
      </div>
      <Compare />
    </div>
  );
}

export default All;
