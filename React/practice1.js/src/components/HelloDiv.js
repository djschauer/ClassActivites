import React from "react";

let name = "Daniel";

const HelloDiv = () => (
        <div>
            <h1>
                Hello! My name is {name}. I am {20 + 5} years old.
            </h1>
            <h3>I like:</h3>
            <ul>
                <li>Pizza</li>
                <li>Books</li>
                <li>Poetry</li>
                <li>Games</li>
                <li>Coding</li>
            </ul>
        </div>
    );

export default HelloDiv;
