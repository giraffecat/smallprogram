function findnumber(collection){
    var change;
    for(let i=0;i<collection.length;i++)
        for(let j=0;j<collection.length;j++)
        if(collection[j+1]<collection[j])
        {  change=collection[j];
      collection[j]=collection[j+1];
      collection[j+1]=change;}
      console.log(collection)
      var word=collection[0];

    var num=0;
    for(let item of collection)
    {
        if(item===word)
        {
            num++;
            if(num>collection.length/2)
                return word;
        }

        else
        {word=item;
        num=1;
        }


    }

}
var arr=[3,8,45,6,5,5,7,5,5,5,5,5,5,5,5,5,'a','b'];
console.log(findnumber(arr))
