# TypeScript Day 1: Deep Dive

Welcome to your TypeScript learning journey! This README is a detailed companion to the code in `index.ts`, focusing only on the topics and examples present in that file.

---

## Prerequisites

- **JavaScript Knowledge**: TypeScript builds on JavaScript. For a JS refresher, visit [this repo](https://github.com/kushkumarkashyap7280/JAVASCRIPT).

---

## Getting Started with TypeScript

- **Install TypeScript globally:**
  ```bash
  npm i -g typescript
  ```
- **Check installation:**
  ```bash
  tsc --v
  ```
- **Initialize a TypeScript project:**
  ```bash
  tsc --init
  ```
- **Compile TS to JS:**
  ```bash
  tsc index.ts
  ```
- Use the `tsconfig.json` file for project-wide settings (e.g., strict mode, target version, noEmitOnError, etc.)

---

## TypeScript Basics in This File

### Type Annotations & Type Safety

- Type annotations add type safety to JavaScript.
- Example:
  ```ts
  function sum(a: number, b: number): number {
    return a + b;
  }
  // const sum = (a: number, b: number): number => a + b;
  // console.log(sum(1, 2));
  // console.log(sum(2, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  ```
- **Best Practice:** Use type annotations for function parameters and return types to catch errors early.

### Primitive Types

- **number**: All JS numbers (integers, floats, NaN, Infinity)
- **string**: Textual data
- **boolean**: `true` or `false`
- **bigint**: For very large integers
- **any**: Disables type checking (use only if necessary)
- **unknown**: Safer for untyped values (e.g., from APIs)

#### Examples:

```ts
const isTrue: boolean = true;
// let n: number = NaN;
// let s: string = "hello world";
// let s1: string = 'kush kumar';
// let s3: string = (123).toString();
// let s4: string = s + s1;
// let l: number = s5.length;
// let productName: string = "oil";
// let productPrice: number = 40;
// let combined: string = `price of ${productName} is : ${productPrice}`;
```

- **Best Practice:** Avoid `any` unless absolutely necessary. Use `unknown` for values from dynamic sources and always check the type before using.

### Functions

- **Declaration:**
  ```ts
  function greet(name: string, age: number): void {
    console.log(`welcome! ${name}, your age is ${age}`);
  }
  // greet("kush", 18);
  ```
- **Arrow Function:**
  ```ts
  // let greet = (name: string, age: number): void => {
  //   console.log(`welcome! ${name}, your age is ${age}`);
  // }
  // greet("kush", 18);
  ```
- **Palindrome Example:**
  ```ts
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
  ```
- **Average Example:**
  ```ts
  // const avg = (...args: number[]): number => {
  //   const sum = args.reduce((acc, curr) => acc + curr, 0);
  //   return sum / args.length;
  // };
  // console.log(`avg of 2, 3, 4 is: ${avg(2, 3, 4)}`);
  ```

### Type Inference

- TypeScript can infer types from initial assignment:
  ```ts
  // let c: number;
  // c = 4;
  // let k = 5; // inferred as number
  // k = '5'; // Error
  ```
- **Best Practice:** Use explicit types for function signatures and public APIs; let TypeScript infer local variable types for brevity.

### Optional and Default Parameters

- **Default parameter:**
  ```ts
  // function greet(name: string, age: number = 17): void {
  //   console.log(`welcome! ${name}, your age is ${age}`);
  // }
  // greet("kush");
  // greet("kush", 18);
  ```
- **Optional parameter:**
  ```ts
  function greet(name: string, age?: number): void {
    console.log(
      `welcome! ${name}, your age is ${
        age !== undefined ? age : "not mentioned"
      }`
    );
  }
  greet("kush");
  // greet("kush", 18);
  ```

---

## Summary & Best Practices

- TypeScript adds type safety and better tooling to JavaScript.
- Use type annotations to catch errors early.
- Prefer `unknown` over `any` for untyped values.
- Use explicit types for function signatures and public APIs.
- Use type inference for local variables.
- Use `tsconfig.json` to configure project-wide settings (e.g., strict mode, target version, noEmitOnError).
- Practice with these basics before moving to advanced TypeScript features.

---

## Resources

- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

---

Happy coding! 🚀
