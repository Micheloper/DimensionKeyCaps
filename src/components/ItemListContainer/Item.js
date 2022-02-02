import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Item.scss";

export const Item = ({ id, name, price, img, description, category }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-3 containerbg">
      <Card.Img variant="top" src={img} className="itemSize"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <Card.Text>Categoria: {category}</Card.Text>

        <Link to={`/detail/${id}`}>
          <Button variant="primary">Lo quiero</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
