function password(obj) {
  const numberToString = obj.birthYear.toString();
  const digits = numberToString.split("");

  if (!obj.siteName || !obj.name || !obj.birthYear || digits.length !== 4) {
    return "invalid";
  }
  const siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  const name = obj.name;
  const birthYear = obj.birthYear;

  const createPass = siteName.concat("#", name, "@", birthYear);
  return createPass;
}

const info ={ name: "maisha" , birthYear: 2002 };
const output = password(info);
console.log(output);
