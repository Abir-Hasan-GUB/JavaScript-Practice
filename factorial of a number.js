// // use for loop::::
// function calculateFactorial(number){
//     var count = 1;
//     for(var i = 1; i <= number; i++){
//         count = count * i;
//     }
//     return count;
// }
// console.log("Factorial of 5 is in for loop: "+calculateFactorial(5));

// // use while loop
// function calculateFactorialUsingWhileLoop(number){
//     var i = 1;
//     var count = 1;
//     while(i <= number){
//         count = count * i;
//         i++;
//     }
//     return count;
// }
// console.log("Factorial of 5 is in while loop: "+calculateFactorialUsingWhileLoop(5));

// use recursion
function fact(n){
    if(n == 0){
        return 1;
    }
    return n * fact(n-1);
}
console.log("Factorial of 5 is in recursion: "+fact(5));