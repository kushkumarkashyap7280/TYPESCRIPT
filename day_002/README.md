# TypeScript Day 002 - Arrays, Objects, and Call Signatures

This directory contains TypeScript examples covering fundamental concepts: arrays, objects, and call signatures.

## 📁 Files Overview

- `array.ts` - Array declarations, types, and iteration methods
- `object.ts` - Object typing, type aliases, and nested objects
- `call_signature.ts` - Function signatures within object types

## 🔢 Arrays (`array.ts`)

### Array Declaration and Typing

```typescript
// Basic array declaration
const arr: number[] = [1, 2, 3, 4, 5];

// Using Array constructor
const nums: number[] = new Array(1, 2, 3, 4, 5);

// String arrays
const strings: string[] = ["a", "b", "c", "d", "e"];

// Using Array.of() and Array.from()
const nums1 = Array.of(1, 2, 3, 4, 5);
const nums2 = Array.from([1, 2, 3, 4, 5]);
```

### Union Type Arrays

```typescript
// Array with union types
const mixedArray: ({name: string} | {age: number} | {city: string})[] = [
    {name: "kush"}, 
    {age: 18}, 
    {city: "Lucknow"}
];
```

### Array Iteration Methods

#### For Loops
```typescript
const nums = [1, 2, 3, 4, 5];

// for...in loop (returns indices)
for(let i in nums) {
    console.log(i); // 0, 1, 2, 3, 4
}

// for...of loop (returns values)
for(const i of nums) {
    console.log(i); // 1, 2, 3, 4, 5
}
```

#### Array Methods
```typescript
// forEach - no return value
nums.forEach((val, index) => {
    console.log(`value of ${index} is: ${val}`);
});

// map - returns new array
const mapped = nums.map((val, index) => val + 1);
// Result: [2, 3, 4, 5, 6]

// filter - returns filtered array
const filtered = nums.filter((val) => val % 2 == 0);
// Result: [2, 4]

// reduce - reduces to single value
const sum = nums.reduce((acc, val) => acc += val, 1);
// Result: 16 (1 + 1 + 2 + 3 + 4 + 5)
```

## 🏗️ Objects (`object.ts`)

### Basic Object Typing

```typescript
// Explicit object typing
const obj: {
    name: string;
    isStudent: boolean;
    address: {
        state: string;
        country: string;
    }
} = {
    name: "kush",
    isStudent: true,
    address: {
        state: "delhi",
        country: "india"
    }
}
```

### Type Aliases

```typescript
// Define reusable type
type Person = {
    name: string;
    isStudent?: boolean; // Optional property
    address: {
        state: string;
        country: string;
    }
}

// Use the type alias
const person1: Person = {
    name: "kumar",
    isStudent: true,
    address: {
        state: "mumbai",
        country: "india"
    }
}

const person2: Person = {
    name: "kashyap",
    // isStudent is optional, so can be omitted
    address: {
        state: "bengal",
        country: "india"
    }
}
```

### Product Example

```typescript
type Product = {
    name: string;
    quantity: number;
    price: number;
}

const product1: Product = {
    name: "soap",
    quantity: 3,
    price: 12
}

function totalPrice(product: Product) {
    console.log("total price is:", product.quantity * product.price);
}

totalPrice(product1); // Output: total price is: 36
```

## 📞 Call Signatures (`call_signature.ts`)

Call signatures define the shape of functions within object types.

### Basic Call Signature

```typescript
type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string; // Call signature
}

const student1: Student = {
    name: "kush",
    age: 5,
    gender: "male",
    greet: (country) => `your name is: ${student1.name}, and age: ${student1.age} and country is: ${country}`,
}

// Using the method
console.log(student1.greet("india"));
// Output: "your name is: kush, and age: 5 and country is: india"
```

### Key Points about Call Signatures

1. **Function as Property**: Call signatures allow you to define functions as object properties with specific parameter and return types.

2. **Type Safety**: TypeScript ensures the function implementation matches the signature.

3. **Reusability**: Can be used in type aliases and interfaces for consistent function shapes across objects.

## 🎯 Key Learning Points

### Arrays
- Multiple ways to declare and initialize arrays
- Strong typing prevents type mismatches
- Rich set of iteration methods (`forEach`, `map`, `filter`, `reduce`)
- Union types allow flexible array content

### Objects
- Explicit typing ensures object structure consistency
- Type aliases promote code reusability
- Optional properties using `?` operator
- Nested object typing supported

### Call Signatures
- Define function shapes within object types
- Ensure consistent function interfaces
- Enable method-like behavior in objects
- Maintain type safety for function parameters and return values

## 🚀 Usage

To run these examples:

```bash
# Compile TypeScript files
tsc array.ts
tsc object.ts
tsc call_signature.ts

# Run compiled JavaScript
node array.js
node object.js
node call_signature.js
```

Or use `ts-node` for direct execution:

```bash
npx ts-node array.ts
npx ts-node object.ts
npx ts-node call_signature.ts
```
