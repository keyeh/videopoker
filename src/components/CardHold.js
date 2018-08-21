import React from "react";

export default (props) => (
    <figcaption className="cardHold">
        &nbsp;
        {props.hold && "HELD"}
        &nbsp;
    </figcaption>
);
