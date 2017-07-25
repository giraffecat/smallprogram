function printfnumber(){
    var i,j;
    for(i=1;i<100;i++) {
        var flag = 1;
        for (j = 2; j < i; j++)
      if(i%j==0)
                flag = 0;
        if (flag == 1)
            console.log(i);
    }
}
printfnumber()