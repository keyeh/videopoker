import React from "react";

export default (props) => (
    <div className="cardHold">
        <span>
            &nbsp;
            {props.hold && "HELD"}
            &nbsp;
        </span>
    </div>
);
