const getProperty = <T, X extends keyof T>(obj: T, key: X) => {
  return obj[key];
};
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "age"));
