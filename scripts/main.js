let counter = 0;

main = function() {
    console.log("Ready");

    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("Decrement Button");
        counter = counter - 1;
        updateView();
    };

    document.querySelector("#resetButton").onclick = (event) => {
        console.log("Reset Button");
        counter = 0;
        updateView();
    };

    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("Increment Button");
        counter = counter + 1;
        updateView();
    };
};


updateView = function() {
    document.querySelector("#counterText").innerHTML = `Counter = ${counter}`;
}

main();
