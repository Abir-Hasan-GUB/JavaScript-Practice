var i = 1;
for(i=1; i<=100; i++){
     if(i % 11 == 0 || i % 2 == 0){
        continue;
    }
    document.write(i+" ");
}