


const chunk=(arr,size)=>{
    let x=size;
    let res=[];
    for(let i=0;i<arr.length;i+=size){
let temp=[];
let j=i;

while(j<x){
    temp.push(arr[j]);
    j++;
}
console.log("aaa",temp);
res.push(temp);
x+=size;
if(x>arr.length){
    x=arr.length;
}
}    
console.log("res",res);
}

const arr=[1,2,3,4,5,6,7,8,9];
const size=3;

chunk(arr,size);