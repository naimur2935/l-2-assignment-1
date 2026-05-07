# Why `unknown` is Better Than `any` in TypeScript

TypeScript is mainly used to make JavaScript safer and easier to maintain. One of the biggest advantages of TypeScript is its type system. It helps developers catch mistakes before running the code. However, if we use the wrong types, we can lose those benefits. Two commonly used types in TypeScript are `any` and `unknown`.

At first, both `any` and `unknown` may look similar because they can store any kind of value such as strings, numbers, arrays, or objects. But the way TypeScript handles them is completely different.

When we use `any`, TypeScript stops checking the variable completely. This means we can access any property, call any method, or even assign different types of values without getting compiler errors.

```ts
let data: any = "hello";

data = 10;
data = true;

data.test();