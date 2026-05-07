# How Generics Enable Reusable, Strictly‑Typed Code in TypeScript

**Introduction**
Generics let you write functions, classes, and interfaces that work with any data type while preserving type safety. They prevent the need for duplicated implementations or falling back to `any`.

**Why Not `any`?**
Without generics you might write:
```ts
function getFirst(arr: any[]): any { return arr[0]; }
```
The return type is `any`, so you lose autocomplete and compile‑time checks.

**Generic Solution**
```ts
function getFirst<T>(arr: T[]): T { return arr[0]; }
const num = getFirst([1, 2, 3]);   
const str = getFirst(["a", "b"]);
```
`T` adapts to the caller’s type, keeping the result strongly typed.

**Constraints**
You can restrict generics with `extends`:
```ts
function getLength<T extends { length: number }>(x: T): number { return x.length; }
```
Only values with a `length` property are allowed.

**Generic Interfaces & Classes**
```ts
interface ApiResponse<T> { status: number; data: T; error: string | null; }
class DataStore<T> {
  private items: T[] = [];
  add(item: T) { this.items.push(item); }
  getAll(): T[] { return [...this.items]; }
}
```
Both adapt to any shape of data.

**Conclusion**
Generics give you reusable, type‑safe building blocks. Use them to avoid duplication and keep your code flexible without sacrificing the safety TypeScript provides.

## Introduction

One of TypeScript's most powerful features is Generics. They allow you to write functions, classes, and interfaces that work with a variety of data types while still maintaining strict type checking. Without generics, you would either have to write separate implementations for each type or fall back to `any`, losing type safety entirely. In this post, we will explore how generics work and why they are essential for building reusable, type-safe code.

## The Problem Without Generics

Imagine you want to write a function that returns the first element of an array. Without generics, you might write it like this:

```ts
function getFirst(arr: any[]): any {
  return arr[0];
}

const num = getFirst([10, 20, 30]);  
const str = getFirst(["a", "b"]);    
```

The function works, but the return type is always `any`. TypeScript has no idea what kind of value you are getting back, so you lose autocomplete, error checking, and all the benefits that come with types.

## Introducing Generics

Generics solve this by letting you define a type parameter that adapts based on the data you pass in:

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst([10, 20, 30]);   
const str = getFirst(["a", "b"]);   
```

Here, `T` is a placeholder. When you call `getFirst([10, 20, 30])`, TypeScript infers that `T` is `number`, so the return type becomes `number`. The function is reusable across all types, and every call remains strictly typed.

## Generics with Constraints

Sometimes you want to restrict what types a generic can accept. You do this with the `extends` keyword:

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");       
getLength([1, 2, 3]);     
getLength(42);          
```

Constraints ensure your generic functions only accept types that meet certain requirements, keeping your code both flexible and safe.

## Generic Interfaces and Classes

Generics are not limited to functions. You can use them with interfaces and classes too:

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
  error: string | null;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: "Alice", age: 25 },
  error: null,
};

const productResponse: ApiResponse<{ id: number; price: number }> = {
  status: 200,
  data: { id: 1, price: 99.99 },
  error: null,
};
```

A single `ApiResponse` interface adapts to any shape of data. This prevents duplication and keeps your API layer consistent.

### Generic Class Example

```ts
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }

  getById(index: number): T | undefined {
    return this.items[index];
  }
}

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);

const stringStore = new DataStore<string>();
stringStore.add("hello");
```

Each instance of `DataStore` is locked to its specific type, so you cannot accidentally mix data types within a single store.

## Multiple Type Parameters

You can use more than one generic type parameter when a function deals with multiple types:

```ts
function mapPair<K, V>(key: K, value: V): { key: K; value: V } {
  return { key, value };
}

const pair = mapPair("age", 25);  
```

This is especially useful for building utilities like key-value mappers, tuple creators, and data transformation pipelines.

## Conclusion

Generics are what make TypeScript truly powerful for building reusable code. They let you write a piece of logic once and use it across many different types — all while keeping strict type checking in place. Whether you are building utility functions, API response wrappers, or data structures, generics ensure that your code stays flexible without becoming unsafe. If you are writing TypeScript and not using generics, you are leaving one of its best features on the table.
