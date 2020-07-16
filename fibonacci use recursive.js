// function for calculate last valu of fibonacci
function fibo (n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else return fibo(n-1) + fibo(n-2);
}
var n = 4 ;
console.log(fibo(n-1)); // here dicrage 1 because initially show extra one step of fibo number in recursion.