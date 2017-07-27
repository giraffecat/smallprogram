function shuixian(){
    for(let i=0;i<10;i++)
    for(let j=0;j<10;j++)
    for(let k=0;k<10;k++)
    {
        if((i*i*i+j*j*j+k*k*k)==(i*100+j*10+k))
            console.log(i*100+j*10+k);
    }


}
shuixian()