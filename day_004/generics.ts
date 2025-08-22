// // genrerics in ts 



// // example : 

// // const printandreturn = (val : number | string) : number | string =>{
// //   console.log(typeof val);
// //   return  val;
// // }


// // const numRes = printandreturn(4);
// // const strRes = printandreturn("how are you");
// // const boolRes = printandreturn(true); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// // console.log(numRes);
// // console.log(strRes);

// // console.log(boolRes);



// // using gereics 

// function printandreturn<T>(val : T) : T{
//   console.log(typeof val);
//   return  val;
// }


// const numRes = printandreturn<number>(4);
// const strRes = printandreturn<string>("how are you");
// const boolRes = printandreturn<boolean>(true); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// console.log(numRes);
// console.log(strRes);

// console.log(boolRes);


// fucntion overloading in ts

// function p<T>(a : T , b : T): void{
//   console.log(typeof a);
//   console.log(typeof b);
// }


// const res :void =  p<number>(4, 6);

// const res2 :void =  p<string>("hello ", "ji");


// const res3 : void = p<string> ("hello" , 6)   //Argument of type 'number' is not assignable to parameter of type 'string'.


function p<T,U>(a : T , b : U): void{
  console.log(typeof a);
  console.log(typeof b);
}


const res3 : void = p<string,number> ("hello" , 6) ;