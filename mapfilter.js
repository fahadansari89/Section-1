const nums=[36,19,10,2,6,13,49];

//map
const squar=nums.map((a)=>{return a**2});
console.log(squar);

const prices=[63.4,12.4,45.2,455.2,99.99]
const int=prices.map((a)=>{return parseInt(a)})
console.log(int);

//filter price greater than 50 and less than 300

const arr=prices.filter((a)=>{return a>50&&a<300})
console.log(arr);