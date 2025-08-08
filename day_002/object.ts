// // // =================== object in TS =========================


// // // in Js
// // // const obj = {
// // //     name : "kush",
// // //     isStudent : true,
// // //     address :{
// // //         state : "delhi",
// // //         country : "india"
// // //     }
// // // }

// // // in Ts
// // const obj: {
// //     name: string;
// //     isStudent: boolean;
// //     address: {
// //         state: string;
// //         country: string;
// //     }
// // } 
// // = {
// //     name : "kush",
// //     isStudent : true,
// //     address :{
// //         state : "delhi",
// //         country : "india"
// //     }
// // }

// // console.log(obj);

// // // obj.address.country = 123;  //Type 'number' is not assignable to type 'string'.


// // // obj.isStudent = 1;          // Type 'number' is not assignable to type 'boolean'.



// //=================== Type  Alias in TS ======================

// type obj = {
//         name: string;
//         isStudent?: boolean;
//         address: {
//             state: string;
//             country: string;
//         }
//     } 


// const  person1 : obj ={
//     name : "kumar",
//     isStudent : true,
//     address :{
//         state : "mumbai",
//         country : "india"
//     }
// }


// const  person2 : obj ={
//     name : "kashyap",
//     // isStudent : false,                 // above we made isStudent optinal using "?"
//     address :{
//         state : "bengal",
//         country : "india"
//     }
// }



type product = {
    name : string;
    quantity : number;
    price : number;
}


const product1 : product ={
    name : "soap",
    quantity : 3,
    price : 12
}


const product2 : product ={
    name : "apple",
    quantity : 3,
    price : 16
}


function totalPrice(product){
    console.log("total price is :" , product.quantity * product.price);
}


totalPrice(product1);
totalPrice(product2);

