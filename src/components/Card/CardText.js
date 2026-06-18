import React from "react";
import {CardTextParagraph} from './Card.styled'

const CardText = ({children}) => {
    return <CardTextParagraph>{children}</CardTextParagraph>
}

export default CardText;