import React from "react";

let name = ["Daniel", "Luke", "Ian", "Dirks", "Matthew", "Aaron", "Maddy", "Jared", "Nikki", "Seth", "MJ", "Will", "Julia", "Taylor"]
let randomIndex = () => (Math.floor((Math.random() * 12) + 1));
let num1 = 1;
let num2 = 2;
let randomNumGen = () => (Math.floor((Math.random() * 99) + 1));
let currentName = name[randomIndex()];
let scrambler = (string) => {
    var split = string.split("");

    var reverse = split.reverse();

    var reversedString = reverse.join("")

    return reversedString
};

const Bodyboot = () => (
    <div className="container">
        <div class="jumbotron">
            <h1 class="display-4">Hello, {currentName}!</h1>
            <hr class="my-4"/>
            <p class="lead">React does maths: 1 + 2 = {num1 + num2}</p>
            <p class="lead">RANDOM NUMBERS: {randomNumGen()}, {randomNumGen()}, {randomNumGen()}</p>
            <p class="lead">{currentName} backwards looks like this: {scrambler(currentName)}</p>
            </div>
    </div>
);

export default Bodyboot;