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





filterEvenNumbers([1, 2, 3, 4, 5, 6]);

reverseString("typescript");

checkType("Hello");

checkType(42);


