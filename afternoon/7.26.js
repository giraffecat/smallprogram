function newarr(collectionA,collectionB){
    var collectionA=collectionA.concat(collectionB);
    var collectionC=new Set(collectionA);
    for(let i=0;i<collectionC.length;i++)
        for(let j=0;j<collectionC.length;j++)
            if(collectionC[j+1]<collectionC[j])
            {  change=collectionC[j];
                collectionC[j]=collectionC[j+1];
                collectionC[j+1]=change;}
    return collectionC
}
var collectionA=[3,5,7,8];
var collectionB=[2,4,6,8];
var result=newarr(collectionA,collectionB);
console.log(result)