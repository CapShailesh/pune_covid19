import React from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function WardWise(props) {
  const menu = props.photos.map((photo) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card key={photo.id}>
          <CardImg width="100%" src={photo.image} alt={photo.id}></CardImg>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Ward Wise Images</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Ward Wise Images</h3>
          <hr></hr>
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
}

export default WardWise;
