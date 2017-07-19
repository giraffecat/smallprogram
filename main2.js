const merge=require('./merge.js');
var collectionA=[1,2,5,4,7,555,77];
var collectionB=[4,7,8,9,6,6];
var result=merge.mergearr(collectionA,collectionB);
console.log(result);