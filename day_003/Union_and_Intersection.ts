// // =========================  Union and Intersection in TS =====================


// // Union ( | )


// // choose any way

// const p = (value : string | number | boolean):void=>{
//     console.log(value);
// }

// p("kush");
// p(18);
// p(true);
// // p(null);  // null is itself unqiue 

// p("jamun");


// // with objects




// type person = {
//     name : string ,
//     age : number
// }

// type employee = {
//     emp_id : number,
//     dept_id : number,
//     dept_name : string
// }


// // union example

// type guy = person | employee;

// // const guy1 : guy = {
// //     name : "kush",
// //     age : 18
// // }

// // or 

// // const guy1 : guy = {
// //    emp_id : 1223,
// //    dept_id : 12,
// //    dept_name : "IT"
// // }

// // const guy1 : guy = {
// //     name : "kush",
// //     age : 18,
// //     emp_id : 1223,
// //     dept_id : 12,
// //     dept_name : "IT"
// // }

// // const guy1 : guy = {
// //     name : "kush",
// //     emp_id : 1223,
// //     dept_id : 12,
// //     dept_name : "IT"
// // }

// // console.log(guy1);



// // Intersection ( & )


// const g1 : person & employee = {
//     name : "kush",
//     age : 18,
//     emp_id : 1223,
//     dept_id : 12,
//     dept_name : "IT"
// }

// // const g1 : person & employee = {   
// //     name : "kush",
// //     emp_id : 1233
// // }

// // note : you have to include everything otherwise error
// /*
// Type '{ name: string; emp_id: number; }' is not assignable to type 'person & employee'.
//   Property 'age' is missing in type '{ name: string; emp_id: number; }' but required in type 'person'.
// */

// console.log(g1);


// with functions 
const p = (value : string & number & boolean):void=>{
    console.log(value);
}

// p("kush");  // Argument of type '"kush"' is not assignable to parameter of type 'never'.
// p(18);
// p(true);




