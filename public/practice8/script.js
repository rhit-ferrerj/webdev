main = function() {
    function multiply(x, y){
        return x*y;
    }

    function isEven(num) {
        return num%2==0
    }

    const difference = function subtract(a, b) {
        return a - b;
    }
    console.log(`${difference(5,1)}`);

    const greeting = function(name) {
        return `Hello, ${name}!`;
    }

    function calculate(x,y) {
        const square = function(num) {
            return num*num;
        }
        return square(x+y);
    }
    console.log(`${calculate(1,2)}`);

    function average(num1, num2, num3){
        const divide = function(divident, divisor) {
            return divident / divisor;
        };
        return divide(num1+num2+num3, 3);
    }
    console.log(`${average(1,2,3)}`);

    const multiply2 = (a,b) => a*b;
    const greet2 = namevar => `Hello, ${namevar}!`;
    const square2 = x => x*x;
    const isEven2 = num => num%2==0;
    const findMax2 = numbers => Math.max(...numbers);
    const addTwoNumbers = (a,b) => a+b;
};

main();