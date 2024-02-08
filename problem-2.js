function checkName(name) {
  const lastLetterOfName = ["a", "y", "i", "e", "o", "u", "w"];

  if (typeof name !== "string") {
    return "invalid";
  } else {
    const lastCharacterOfName = name[name.length - 1];

    for (const alphabet of lastLetterOfName) {
      if (lastCharacterOfName.toLowerCase() === alphabet.toLowerCase()) {
        return "Good Name";
      }
    }

    return "Bad Name";
  }
}

const output = checkName("Salman");
console.log(output);
