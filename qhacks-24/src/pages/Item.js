import React from "react";
import { useLocation } from 'react-router-dom'

export default function Item() {

    // props.info. condition, description, postalcode, price, title, category
    const location = useLocation();
    const message = location.state ? location.state.message : 'no message passed';

    return (
        <div
            id="homeContainer"
            className=""
        >
            {message}
        </div>
    )
}