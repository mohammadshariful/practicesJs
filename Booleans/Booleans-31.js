/*Truthy value
1.0
2.NaN
3.-0
4.false
5.""
6.null
7.undefined */

const x = Boolean(false);
console.log(x);
const f = Boolean("");
console.log(f)



const o = new Boolean();
const ob = new Boolean();

console.log(o === ob);



//javascript booleans without string false