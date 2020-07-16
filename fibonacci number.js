function fibonacci(n){
    var first = 0;
    var second = 1;
    console.log(first);
    console.log(second);
    for(var i = 2; i<n; i++){
        var fibo = first + second;
        console.log(fibo);
        first = second;
        second = fibo;
    }
}

console.log(fibonacci(5));