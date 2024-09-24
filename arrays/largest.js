

const largest=(arr)=>{
let largest=arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}

return largest;
}

let arr=[-2,-3,-1];

const res=largest(arr);

console.log("res is",res);