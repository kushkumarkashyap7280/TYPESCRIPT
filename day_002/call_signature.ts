// ===================== Call Signature in TS =================

type student= {
    name : string;
    age  : number;
    gender? : string;
    greet : (country: string)=> string; // call signature  in ts


}

const student1 : student ={
    name : "kush",
    age : 5,
    gender : "male",
    greet : (country) => `your name is : ${student1.name} , and age : ${student1.age} and country  is : ${country}`,
}

// console.log(student1);

// const introduction = (student)=>{
//     const {name , age} =student;

//     return `your name is : ${name} , and age : ${age}`;

// }

// console.log(introduction(student1));


console.log(student1.greet("india"));