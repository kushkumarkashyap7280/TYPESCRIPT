// ================== TypeScript Day 1: Deep Dive ==================
// Prerequisite: You should know JavaScript basics before learning TypeScript.
// For a JS refresher, visit: https://github.com/kushkumarkashyap7280/JAVASCRIPT

// -------------------- Getting Started --------------------
// Install TypeScript globally:
//   npm i -g typescript
// Check installation:
//   tsc --v
// Initialize a TypeScript project (creates tsconfig.json):
//   tsc --init
// Compile TS to JS:
//   tsc index.ts
// Note: Use the "tsconfig.json" file for project-wide settings (e.g., strict mode, target version, noEmitOnError, etc.)

// -------------------- Basic Syntax --------------------
// TypeScript uses type annotations to add type safety to JavaScript.
// Example: Function with type annotations for parameters and return type.
// This helps catch errors at compile time.
//
// function sum(a: number, b: number): number {
//   return a + b;
// }
//
// Arrow function version:
// const sum = (a: number, b: number): number => {
//   return a + b;
// }
//
// Usage:
// console.log(sum(1, 2)); // Output: 3
// console.log(sum(2, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// -------------------- Types in TypeScript --------------------
// Type annotations specify the type of variables, function parameters, and return values.
// Use colon (:) for type annotations.

// 1. number
// const n: number = NaN; // NaN is a valid number value
// console.log(typeof NaN); // 'number'
// console.log(n); // NaN

// 2. string
// const s: string = "hello world";
// const s1: string = 'kush kumar';
// const s3: string = (123).toString(); // Convert number to string
// const s4: string = s + s1; // String concatenation
// console.log(typeof s); // 'string'
// console.log(s4); // 'hello worldkush kumar'
// const s5: string = "qwerty";
// const l: number = s5.length; // String length
// console.log(l); // 6
// const productName: string = "oil";
// const productPrice: number = 40;
// const combined: string = `price of ${productName} is : ${productPrice}`;
// console.log(combined); // 'price of oil is : 40'

// 3. boolean
const isTrue: boolean = true; // Only true or false allowed
// isTrue = "true"; // Error: Type 'string' is not assignable to type 'boolean'.
// function canVote(age: number): boolean {
//   return age >= 18;
// }
// const age: number = 20;
// console.log(`your age is : ${age} so you ${canVote(age) ? "can" : "can't"} vote`);

// 4. bigint
// Use bigint for very large integers beyond Number.MAX_SAFE_INTEGER (2^53 - 1)
// const n: number = 9007199254740991n; // Error: Type 'bigint' is not assignable to type 'number'.
// const n: bigint = 9007199254740991n; // Correct
// console.log(n);

// 5. any
// Use 'any' to opt out of type checking (not recommended for most code)
// let k: any = "40";
// k = 45; // Allowed
// console.log(k);
// Best practice: Avoid 'any' unless absolutely necessary, as it disables type safety.

// 6. unknown
// 'unknown' is safer than 'any' for values from dynamic sources (e.g., API responses)
// let k: unknown = "40";
// k = 200;
// // To use 'k', you must check its type first
// if (typeof k === "string") {
//   console.log(k.toUpperCase());
// }
// Best practice: Use 'unknown' for untyped values, and always perform type checks before using.

// Note: There are more types in TypeScript, but these are the essentials for beginners.

// -------------------- Functions --------------------
// Function declaration with typed parameters and return type
// function greet(name: string, age: number): void {
//   console.log(`welcome! ${name}, your age is ${age}`);
// }
// greet("kush", 18);

// Arrow function version
// let greet = (name: string, age: number): void => {
//   console.log(`welcome! ${name}, your age is ${age}`);
// }
// greet("kush", 18);

// Example: Check if a number is a palindrome
// function isPalindrome(n: number): boolean {
//   const s: string = n.toString();
//   let i: number = 0, j: number = s.length - 1;
//   while (i < j) {
//     if (s[i] !== s[j]) return false;
//     i++;
//     j--;
//   }
//   return true;
// }
// let num: number = 123454321;
// console.log(`given number: ${num} is ${isPalindrome(num) ? "palindrome" : "not palindrome"}`);

// Example: Average of numbers using rest parameters
// const avg = (...args: number[]): number => {
//   const sum = args.reduce((acc, curr) => acc + curr, 0);
//   return sum / args.length;
// };
// console.log(`avg of 2, 3, 4 is: ${avg(2, 3, 4)}`);

// -------------------- Type Inference --------------------
// TypeScript can infer types from initial assignment
// let c: number; // Explicit type
// c = 4;
// let k = 5; // Inferred as number
// // k = '5'; // Error: Type 'string' is not assignable to type 'number'.
// Best practice: Use explicit types for function signatures and public APIs; let TypeScript infer local variable types for brevity.

// -------------------- Optional and Default Parameters --------------------
// Normal function
// function greet(name: string, age: number): void {
//   console.log(`welcome! ${name}, your age is ${age}`);
// }
// greet("kush", 18);

// Using default parameter
// function greet(name: string, age: number = 17): void {
//   console.log(`welcome! ${name}, your age is ${age}`);
// }
// greet("kush"); // Uses default age
// greet("kush", 18);

// Using optional parameter (age can be omitted)
function greet(name: string, age?: number): void {
  // 'age' is optional and may be undefined
  // Use nullish coalescing or a conditional to handle undefined
  console.log(`welcome! ${name}, your age is ${age !== undefined ? age : "not mentioned"}`);
}
greet("kush");
// greet("kush", 18);

// -------------------- Summary --------------------
// - TypeScript adds type safety and better tooling to JavaScript.
// - Use type annotations to catch errors early.
// - Prefer 'unknown' over 'any' for untyped values.
// - Use explicit types for function signatures and public APIs.
// - Use type inference for local variables.
// - Use 'tsconfig.json' to configure project-wide settings (e.g., strict mode, target version, noEmitOnError).
// - Practice with these basics before moving to advanced TypeScript features.





















