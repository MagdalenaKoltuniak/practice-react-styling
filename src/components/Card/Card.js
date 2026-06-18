import React from "react";
import CardImg from "./CardImg";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardText from "./CardText";
import { CardDiv } from "./Card.styled";

const Card = ({width, children}) => {
    return (
        <CardDiv $width={width}>{children}</CardDiv>
    )
}

export default Object.assign(Card, {
  Img: CardImg,
  Title: CardTitle,
  Body: CardBody,
  Text: CardText,
});

