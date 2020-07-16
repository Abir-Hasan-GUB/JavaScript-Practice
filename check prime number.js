function checkPrime(n) {
    if (n == 2 || n == 3 || n == 5 || n == 7) {
        console.log("Prime Number...");
    }
    else if(n==1){
        console.log("1 dosn't conseder for prime number...");
    }
    else {
        if (n % 2 == !0 && n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
            console.log("Prime Number...");
        } else
            console.log("Not Prime...");
    }
}
checkPrime(2147483647);