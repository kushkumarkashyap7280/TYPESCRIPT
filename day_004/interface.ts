// interface in ts 

// why we using interface if we alredy have type alias ?

interface Student{
   name : string,
   c: number
}


const s1 : Student ={
   name : "kush",
   c : 5,
   // favAnime : "aot"  //Object literal may only specify known properties, and 'favAnime' does not exist in type 'Student'.ts(2353)
}

console.log(s1);