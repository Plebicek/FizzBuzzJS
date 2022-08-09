/* My first project in JavaScript. The project is the game called FizzBuzz 
where you have to find when a number is Fizz that is when number can be divided by three or Buzz when a number can be divided by Five.
Third option is when a number can be divided by both that is called FizzBuzz.

Output is in the console.

Maybe later I will update this game. 
*/
const input = parseInt(prompt("zadej číslo na hru FizzBuzz"));

let dividedByThree = num=> {
    if(num%3==0) {
        return true;
    }
}

let dividedByFive = num=> {
    if(num%5==0) {
        return true;
    }
}

let dividedByThreeAndFive = (num) =>{
    if(num%3==0 && num%5==0) {
        return true;
    }
}

for (let i = 1; i <= input; i++) {

    if(dividedByThreeAndFive(i)) {
        console.log(i + " FizzBuzz")
        continue
    }

    if(dividedByFive(i)){
        console.log(i + " Buzz")
        continue
    }

    if(dividedByThree(i)){
        console.log(i + " Fizz")
        continue
    }
}
