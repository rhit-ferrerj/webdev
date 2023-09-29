main = function() {
    console.log('Q1: Counting up from 2 to 10 in even numbers')
    for (let i = 2; i <= 10; i+=2) {
        console.log(i);
    }
    
    console.log('Q2: Counting down from 5 to 1');
    for (let i = 5; i != 0; i--) {
        console.log(i);
    }

    console.log('Q3: Summing array elements');
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    console.log(`Sum = ${sum}`);

    console.log('Q4: Property names');
    const student = {name: 'John', age: 20, grade: 'A' }
    
    for (const key in student) {
        console.log(`${key}`);
    }
    
    console.log('Q5: Property values');
    const book = { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 };
    for (const key in book) {
        console.log(`${book[key]}`);
    }

    console.log('Q6: List elements');
    const colors = ['red', 'green', 'blue', 'yellow'];
    for (const color of colors) {
        console.log(`${color}`);
    }

    console.log('Q7: Summing array elements');
    const numbers2 = [1, 2, 3, 4, 5];
    let sum2 = 0;
    for (const num of numbers2) {
        sum2 += num;
    }
    console.log(`Sum = ${sum2}`);

    console.log('Q8: Element conversion');
    const temperatures = [32, 68, 75, 82, 56];
    temperatures.forEach(
        function(number) {
            number = (number - 32) * 5/9;
            console.log(`Celsius = ${number}`);
        }
    );
    
    console.log('Q9: City population');
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
    const populations = {'New York': 8398748, 'Los Angeles': 3990456,
        'Chicago': 2705994, 'Houston': 2320268 };
    cities.forEach(
        function(city) {
            console.log(`${populations[city]}`);
        }
    );


    console.log('Q10: Thai pattern');
    for (let i = 1; i <= 5; i++) {
        pattern = '';
        for (let j = 0; j<i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}


main();
