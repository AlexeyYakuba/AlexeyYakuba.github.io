let arrayOfNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', 18, 19, 20, 21, 22, 23, 24, 25]
arrayOfNumbers.forEach(function(number) {
    console.log(number);
    
if(number%3===0 && number%5===0) {
    console.log(`FizzBuzz`);
}
    else if(number%5==0 ) {
        console.log(`Buzz`);
    }
    else if(number%3==0) {
        console.log(`Fizz`);
        }
});