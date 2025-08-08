// // ====================== Arrays in Typescript =================

// const  arr:number[] = [1,2,3,4,5];   // this is how you declaretion and  assign array in ts

// const nums : number[] = new Array(1,2,3,4,5);

// console.log(arr);
// console.log(nums);

// const strings : string[] = ["a","b","c","d","e"];
// console.log(strings);


// const nums1 = Array.of(1,2,3,4,5);

// const nums2 = Array.from([1,2,3,4,5]);


// console.log(nums1);
// console.log(nums2);


// const a : ({name : string} | {age : number} | {city : string})[] = [{name : "kush"},{age : 18},{city : "Lucknow"}];
// console.log(a);

// const b: ({
//     name: string;
//     age?: undefined;
//     city?: undefined;
// } | {
//     age: number;
//     name?: undefined;
//     city?: undefined;
// } | {
//     city: string;
//     name?: undefined;
//     age?: undefined;
// })[] = [{name : "kush"},{age : 18},{city : "Lucknow"}];




const nums  = [1,2,3,4,5];

// for in loop  // i is index
for(let i in nums){
    console.log(i);
}

// for of loop  // i is val of index
for (const  i of nums) {
    console.log(i);
}


// for each
// does not return anything
nums.forEach((val , index)=>{
    console.log(`value of ${index} is : ${val}`);
})

// map loop    // return new array
const m = nums.map((val, index)=> val + 1);

console.log(m);

// filter loop      // return array of satistfied condition values;

const f = nums.filter((val)=> val%2 == 0);

console.log(f);


// reduce method   // to reduce array to single value
const  r = nums.reduce((acc , val )=> acc+= val,1);
console.log(r);



