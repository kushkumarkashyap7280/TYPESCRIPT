// ======================== Tuples in TS ==========================

// type personInfo = [ name : string , age : number , isMonster : boolean];


type personInfo = readonly [ name : string , age : number , isMonster : boolean];

const p1 : personInfo = ["kush", 18, false];

// p1.push("coding");   // added extra property

// output : [ 'kush', 18, false, 'coding' ]

// note : tuple has same  order for every instance 
//  here above we pushed "coding" which is not uniform now so if you want to avoid so no one can change type personInfo or can say tuple use
// make "readonly" tuple
console.log(p1);

// const p2 : personInfo = [18, "admin", true];  // this will show error because order matters in tuples

const p2  : personInfo = ["admin", 18, true];


const getDetails = (user : personInfo)=>{
    const [name , age , isMonster] = user;
    console.log("name : " , name , "age : " , age , "isMonster : " , isMonster);
}

getDetails(p1);