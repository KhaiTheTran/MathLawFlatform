import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
    return (
        <>
            <li className="cards__item" style={props.style}>
                <Link className="cards__item__link" to={props.path}>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}
export default CardItem;
