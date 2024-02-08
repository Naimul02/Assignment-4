function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  } else {
    const newArray = [];
    for (const element of array) {
      if (typeof element === "number" && !isNaN(element)) {
        newArray.push(element);
      }
    }
    return newArray;
  }
}
const output = deleteInvalids({ num: [1, 2, 3] });
console.log(output);
