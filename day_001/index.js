// // prerequisite is you should know javascript then only helpful 
// // visit my repo to learn js 
// //link - https://github.com/kushkumarkashyap7280/JAVASCRIPT
// // installation of ts
// // npm i -g typescript  
// // check if installed 
// // tsc --v
// // basic syntax in ts 
// // to compile ts to js you need to run  "tsc index.js";
// // create a function to reutrn sum 
// // function sum(a:number, b:number):number{
// //   return a + b;
// // }
// // arrow function 
//  const sum =(a:number, b:number):number=>{
//    return a + b;
//  }
// // console.log(sum(2 , "3"));  //Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(sum(1, 2));
// // if want customiszation like noEmitOnError or somehting else use "tsconfig.json" file  
// // by using in terminal   "tsc --init"   so if like you dont want compilation if any error then it is good to use.
// // =================== types in typescirpt =======================
// // In typescipt , type annotations is a way of explicitely specifiying type of varible ,functions , or return type ...
// // we use colon(:) for that
// // 1.  type Number
// // const k : number = "r";  //'k' is declared but its value is never read.t
// const n : number = NaN;
// console.log(typeof NaN);
// console.log(n);
// // 2. type string
// const s : string = "hello world";
// const s1 : string = '  kush kumar';
// // const s2: string = 1323; //'s2' is declared but its value is never read.
// const s3 : string = (123).toString();
// const s4 : string =  s + s1;
// console.log(typeof s);
// console.log(typeof s1);
// console.log(typeof s3);
// console.log(s4);
// const s5 : string = "qwerty";
// const l:number = s5.length;
// console.log(l);
// const productName: string = "oil";
// const productPrice: number = 40;
// const combined : string = `price of ${productName} is : ${productPrice}`;
// console.log(combined);
// type boolean
var isTrue = true;
// isTrue = "true"  // this will not work bool take only true or false value;
// function canVote (age:number):boolean{
//   return age >= 18;
// }
// const age: number = 20;
// console.log(`your age is : ${age} so you ${canVote(age)?"can":"can't"} vote`);
// type bigInt
// max safe value 
//1.7976931348623157e+308
// max safe integer
// 9007199254740991
// min safe integer
// -9007199254740991
// there is a range of 2**53 for js normal number to store beyond that it will can able to store 
// thats why bigInt came 
// const n :number = 9007199254740991n;  //Type 'bigint' is not assignable to type 'number'.
// const  n : bigint = 9007199254740991n;
// console.log(n);
// type any
// to moves back you to normal js if you use any
// let k : any = "40";
// k = 45;
// console.log(k);
// type unknown 
// why unknown if we alredy have any
// while fetching data use it .. for better safety
// let k  : unknown = "40";
// k = 200;
// console.log(k);
// note : we have more types but these you should know minimum and for more go  offical weibsite
// ====================== functions =================================
// function declaration
// function  greet(name:string, age:number):void{
//   console.log(`welcome! ${name}, your age is ${age}`);
// }
// greet("kush", 18);
// arrow function
// let  greet = (name:string, age:number):void=>{
//   console.log(`welcome! ${name}, your age is ${age}`);
// }
// greet("kush", 18);
// function to if number is  check palindrome 
// function isPalindrome(n : number):boolean{
//   const s :string = n.toString();
//   let i:number = 0, j:number = s.length - 1;
//   while( i < j){
//     if(s[i] != s[j]) return false;
//     i++;
//     j--;
//   }
//   return true;
// }
// let num : number = 123454321;
// // try more values
// console.log(`give number : ${num} is ${isPalindrome(num)?"palindrome":"not palindrome"}`);
// function to find avg
// const avg = (...args: number[]): number => {
//   const sum = args.reduce((acc, curr) => acc + curr, 0);
//   return sum / args.length;
// };
// console.log(`avg of ${2} , ${3} , ${4} is : ${avg(2,3,4)} `);
// =================================== type inference in ts  =======================================
// example
// typescript automatically implicitely  assume when first time declarred + assigning  value otherwise not 
// let c:number ;  // valid
// c = 4 ;
// let k = 5;   // type inference  ,stil valid
// //  k = '5'  //Type 'string' is not assignable to type 'number'.
// note : but then why we use explicitley to decide data type ? 
// what is good practice 
//================= optinal and default paramneter in ts ==================
// normal fucntion 
// function  greet(name:string, age:number):void{
//   console.log(`welcome! ${name}, your age is ${age}`);
// }
// greet("kush", 18);
// // using deafult 
// function  greet(name:string, age:number = 17):void{
//   console.log(`welcome! ${name}, your age is ${age}`);
// }
// greet("kush");
// // greet("kush", 18);
// using optional 
function greet(name, age) {
    console.log("welcome! ".concat(name, ", your age is ").concat(age ? age : "not mentioned"));
}
greet("kush");
// greet("kush", 18);
