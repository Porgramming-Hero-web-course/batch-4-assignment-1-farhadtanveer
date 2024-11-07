# Type Guards in TypeScript

Type guards are techniques that check the data type at runtime. In TypeScript, we have different types of type guards, such as `typeof`, `in`, and `instanceof`. Let's discuss these three types of type guards.

## 1. `typeof`

Used to check primitive data types like `string` and `number`.

```typescript
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("This is a string:", value.toUpperCase());
  } else {
    console.log("This is a number:", value * 2);
  }
}

printValue("hello"); // Output: This is a string: HELLO
printValue(5); // Output: This is a number: 10
```

## 2. `in`

The `in` type guard is used to check if a property exists in an object. By using the `in` guard, we can verify whether a specific property exists within an object.

```typescript
type User = { name: string; age: number };
type Admin = { name: string; role: string };

function printPersonInfo(person: User | Admin) {
  if ("age" in person) {
    console.log("User's Age:", person.age);
  } else {
    console.log("Admin's Role:", person.role);
  }
}

const user: User = { name: "Alice", age: 30 };
const admin: Admin = { name: "Bob", role: "Administrator" };

printPersonInfo(user); // Output: User's Age: 30
printPersonInfo(admin); // Output: Admin's Role: Administrator
```

## 3. `instanceof`

The `instanceof` type guard is used to check if an object is an instance of a specific class.

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog); // Output: Woof!
makeSound(cat); // Output: Meow!
```
