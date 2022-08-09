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
