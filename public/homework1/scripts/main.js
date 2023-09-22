let counter = 0;
let color = '#800000';

const colorMap = {'#000080': 'Blue', '#008000': 'Green', '#800000': 'Red', '#800080': 'Purple'};

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
    
    document.querySelector('#blueButton').onclick = (event) => {
        console.log("Blue Button");
        color = '#000080';
        updateView();
    }
    
    document.querySelector('#greenButton').onclick = (event) => {
        console.log("Green Button");
        color = '#008000';
        updateView();
    }
    
    document.querySelector('#redButton').onclick = (event) => {
        console.log("Red Button");
        color = '#800000';
        updateView();
    }
    
    document.querySelector('#purpleButton').onclick = (event) => {
        console.log("Purple Button");
        color = '#800080';
        updateView();
    }
};


updateView = function() {
    document.querySelector("#counterText").innerHTML = `${counter}`;
    document.querySelector("#colorBox").innerHTML = `${colorMap[color]}`;
    
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = color;     
}

main();
