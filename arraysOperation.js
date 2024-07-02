const fruits=['mango','banana','apple','orange','pineapple','grapes','guavava','papaya']
console.log(fruits.slice(3));
fruits.splice(1,4);
console.log(fruits);
console.log(fruits.indexOf('mango'));
console.log(fruits.shift());
console.log(fruits);


const nums=[36,19,10,2,6,13,49];
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
console.log('\n');
for(let j of nums){
    console.log(j);
}
//square of each element
console.log('\n');
nums.forEach((a,i)=>{console.log(a*a,i);})

//crerate new array containig only even numbers
const even=[]
nums.forEach((n)=>{
    if(n%2==0)
        even.push(n)
});
console.log(even);
