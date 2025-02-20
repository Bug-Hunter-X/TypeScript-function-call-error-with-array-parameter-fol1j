function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Iterate through array
for (let i = 0; i < user.length; i++) {
  console.log(greeter(user[i]));
}

// Solution 2: Join array elements into a single string
console.log(greeter(user.join(" ")));

// Solution 3: Type the parameter as an array of strings
function greeter2(person: string[]): string {
    return "Hello, " + person.join(" ")
}
console.log(greeter2(user));