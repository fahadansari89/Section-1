function addnums(a,b){
    c=a+b;
    console.log(c);
}
addnums(34,45)
console.log(c);
const getavg=function(m1,m2,m3,m4=70){
    console.log(m1,m2,m3,m4);
    const avg=(m1+m2+m3+m4)/4;
    
    // console.log(avg);
    return avg;
}

const res=getavg(23,45,32,48);
console.log(res);
// Arrow function 
const fact =(n)=>{
  let f=1;
  for(let j=2 ;j<=n;i++){
 f*=j;

  
}
return f;
}
// let [a,b,c]=[6,3,6];
// console.log(a);
// [b,c]=[c,b];
// console.log(b,c);
// const[name1,name2, ,,name4] =['a'b'c'x's]{
// console.log(name4);
// }

const getreport=(m1,m2,m3,m4,max=100)=>{
const avg=getavg(m1,m2,m3,m4);
const percentage=avg/max*100;
return[avg,percentage]
}
const [v1,v2]=getreport(123,156,78,90,200);
console.log(v1,v2);

const fun=(start,end)=>{
    let sum=0;
for(let i=start;i<=end;i++){
    if(i%7==0){
        console.log(i);
        sum=sum+i;
    }
   
}
return sum;
}
const s=fun(10,100);
console.log(s);