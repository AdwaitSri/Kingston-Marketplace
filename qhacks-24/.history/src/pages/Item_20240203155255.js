import React from "react";

export default function Item(props) {

    // props.info. condition, description, postalcode, price, title, category


    return (
        <div
            id="homeContainer"
            className=""
        >
            {props.info.price}
        </div>
    )
}