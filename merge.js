function mergearr(collectionA,collectionB){
    var Newarr=collectionA.concat(collectionB);
    var exchange;
    var Nosamearr=[];
    var set
    for(let i=0;i<Newarr.length;i++)
        for(let j=0;j<Newarr.length;j++)
            if(Newarr[j]>Newarr[j+1])
            { exchange=Newarr[j];
            Newarr[j]=Newarr[j+1];
            Newarr[j+1]=exchange;}
            console.log(Newarr);
    for(let i=0;i<Newarr.length;i++)
        if(Newarr[i]!==Newarr[i+1])
            Nosamearr.push(Newarr[i]);
    return Nosamearr;
}
var collectionA=[1,2,5,4,7,555,77];
var collectionB=[4,7,8,9,6,6];
var result=mergearr(collectionA,collectionB);
console.log(result);
module.exports={mergearr,}
