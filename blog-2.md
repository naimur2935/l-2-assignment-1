
---

### `blog-2.md`

```md
# How Generics Help in TypeScript

Generics are one of the most useful and powerful features in TypeScript. They allow developers to write reusable, flexible, and type-safe code. In modern TypeScript applications, generics are widely used in functions, interfaces, classes, and APIs.

Before understanding generics, it is important to understand the problem they solve.

Without generics, developers often use `any` when they want a function to work with multiple types.

```ts
function getFirst(arr: any[]): any {
  return arr[0];
}