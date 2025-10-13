// Basic

/* // console.log("welcome to js")
// a=8;
// console.log(a)
// let object1={age:33};
// let object2 =object1;
// object1.age=22;
// console.log(object2.age)
// console.log(9|5);
// console.log(9^5);
 */
//Function start

/* // function mul(a,b){
//    return a*b;
// }
// console.log(mul(10,30))
// const sum=(a,b,c)=>{
//    console.log(a+b+c);
// }
// sum(10,20,30); */


// MAP,FILTER

/* 
function double(num){
   return num*2;
}
let arr=[2,3,4,5,6];
let doublearr=arr.map(double);
console.log(doublearr);
const triple=arr.map((n)=>n*3); 
console.log(triple);
let arr1=[2,4,1,4,3];
let odd=arr1.filter(func1);
function func1(num){
     if(num%2==1){
     return false;
     }
     else{
      return true;
     }
   }
   console.log(odd); 

   let arr1=[5,1,3,2,5]
   const arrow1=arr1.map((fun)=>fun*5);
   console.log(arrow1);*/


   //reduce
   
 /*   // let arr=[1,2,3,4,5];
   // const sum=arr.reduce((par1,par2)=>{
   //    return par1*par2;
   // },1)
   // console.log(sum); */

   //sum of even triple number

 /*   let arr=[1,2,3,4,5]
const triple1=arr.map((fun)=>fun*3);
let even=triple1.filter(fun1);
function fun1(num){
   return num%2==0;
}
let sum=even.reduce(fun2);
function fun2(par1,par2){
   return par1*par2;
}
console.log(triple1);
console.log(even);
console.log(sum); */


//restructuring array

/* let arr3=[1,2,3,4,5];
const [one,two]=arr3;
console.log(one); */

/* 
let b=[1,2,3,4,5];
 
const [one,...two]=b;
console.log(two); */

//spread

/* let b=[1,2,3,4,5];
const [one,...two]=b;
console.log(two);
let num=[0,...b,6,7];
console.log(num) */

//merge

/* const obj1= {x:3,y:4};
const obj2={x:4,y:5};
const spread={...obj1,...obj2};
console.log(spread); */

//promises

/* const promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
 let  object=true;
   if(object){
      console.log('resolved successfully');
   }
   else{
      console.log('reject');
   }
},2000)
})
console.log('before promises') */;


//json fetch file

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err=>console.log(err)); */

// specific object get


/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .then(result=>{
         result.map(result1=>console.log(result1));
      });
    */

//async and await

/* async function fetchApi(){
 try{
   const response= await fetch('https://jsonplaceholder.typicode.com/posts')
 
 const data =await response.json();
 data.map((user)=>{
   console.log(user.name);
 })
 }
catch(error){
   console.log(error);
}
}
fetchApi(); */

//String Literals

const name='Deepika';
const age='19';
console.log(`I am ${name} and my age is ${age}`);
