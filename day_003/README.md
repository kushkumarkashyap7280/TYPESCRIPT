# Day 003: Advanced Types - Enums, Tuples, Union & Intersection

Welcome to **Day 003** of the TypeScript learning journey! 🎯

Today's focus is on **Advanced Type System** features that make TypeScript powerful for building robust applications.

---

## 📚 Topics Covered

### 1. **Enums** 📋
- String enums for better type safety
- Using enums in type definitions
- Practical role-based access control example

### 2. **Tuples** 📦
- Fixed-length arrays with specific types
- Order-sensitive data structures
- Readonly tuples for immutability
- Destructuring tuple values

### 3. **Union Types** 🔀
- OR logic with `|` operator
- Accepting multiple possible types
- Flexible function parameters
- Object union types

### 4. **Intersection Types** ⚡
- AND logic with `&` operator
- Combining multiple types
- Understanding the `never` type pitfall

---

## 🗂️ Files Overview

### [`Enums.ts`](./Enums.ts)
**String Enums & Type Safety**

```typescript
enum role {
    user = "user",
    admin = "admin"
}

type userDetails = {
    name?: string,
    email: string,
    password: string,
    role: role
}
```

**Key Concepts:**
- ✅ String enums for readable values
- ✅ Type-safe role checking
- ✅ Integration with custom types
- ✅ Conditional logic based on enum values

### [`Tuples.ts`](./Tuples.ts)
**Fixed-Order Type Arrays**

```typescript
type personInfo = readonly [name: string, age: number, isMonster: boolean];

const p1: personInfo = ["kush", 18, false];
```

**Key Concepts:**
- ✅ Fixed-length arrays with specific types
- ✅ Order-sensitive data structures
- ✅ `readonly` modifier for immutability
- ✅ Destructuring assignments
- ✅ Type safety with ordered data

### [`Union_and_Intersection.ts`](./Union_and_Intersection.ts)
**Type Combinations**

```typescript
// Union Types (OR logic)
const flexibleParam = (value: string | number | boolean): void => {
    console.log(value);
}

// Intersection Types (AND logic) - Be careful!
const impossibleParam = (value: string & number & boolean): void => {
    // This creates 'never' type - no value can satisfy all three!
    console.log(value);
}
```

**Key Concepts:**
- ✅ Union types (`|`) for flexible parameters
- ✅ Object union types
- ⚠️ Intersection types (`&`) with primitives create `never`
- ✅ Understanding when to use union vs intersection

---

## 🔍 Key Insights & Best Practices

### ✅ **Do's**
- Use **string enums** for readable, maintainable constants
- Apply **readonly tuples** when data order and immutability matter
- Prefer **union types** for flexible function parameters
- Use **intersection types** for combining object types (not primitives)

### ❌ **Don'ts**
- Don't use intersection types with incompatible primitives
- Don't mutate tuples unless specifically needed
- Don't mix enum values with raw strings in comparisons

### 🚨 **Common Pitfall**
```typescript
// ❌ This creates 'never' type!
const badFunction = (value: string & number & boolean) => {
    // No value can be all three types simultaneously
}

// ✅ Use union instead
const goodFunction = (value: string | number | boolean) => {
    // Value can be any one of these types
}
```

---

## 🎯 Learning Outcomes

After completing Day 003, you should understand:

- **Enums**: How to create type-safe constants and use them effectively
- **Tuples**: When and how to use fixed-order type arrays
- **Union Types**: Creating flexible, type-safe function parameters
- **Intersection Types**: Understanding their proper use cases and limitations
- **Type Safety**: How these features prevent runtime errors

---

## 🚀 Next Steps

- **Day 004**: Classes, Interfaces, and Object-Oriented Programming
- Practice combining these advanced types in real-world scenarios
- Explore more complex type combinations and generic types

---

## 💡 Quick Reference

| Feature | Syntax | Use Case |
|---------|--------|----------|
| **Enum** | `enum Role { user = "user" }` | Constants, configurations |
| **Tuple** | `[string, number, boolean]` | Fixed-order data |
| **Union** | `string \| number` | Flexible parameters |
| **Intersection** | `TypeA & TypeB` | Combining object types |

---

**Happy Coding!** 🎉
