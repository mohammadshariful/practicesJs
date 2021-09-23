const array = [1,2,3,4,5,6,7,8];
const p = [] ;
array.forEach((val,index,arr)=>{
    arr[index] = p.push(val * 5)
});
console.log(p);

console.log(array);