// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  const evenNumbers = numbers.filter((n) => n % 2 === 0);
  console.log(evenNumbers);
  return evenNumbers
}

// Problem 2
function reverseString(str: string): string {
  const reversedString = str.split("").reverse().join("");
  console.log(reversedString);
  return reversedString;
}

// Problem 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
  if (typeof value === "string") {
    console.log("String")
    return "String";
  }
  console.log("Number")
  return "Number";
}

// Problem 4
function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  console.log(obj[key])
  return obj[key];
}

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  const readStatus = { ...book, isRead: true };
  console.log(readStatus)
  return readStatus;
}





filterEvenNumbers([1, 2, 3, 4, 5, 6]);

reverseString("typescript");

checkType("Hello");

checkType(42);

getProperty({ id: 1, name: "John Doe", age: 21 }, "name");

toggleReadStatus({ title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 });

