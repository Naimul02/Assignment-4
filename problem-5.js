function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  } else {
    let sum = 0;
    for (const income of arr) {
      if (income >= 3000) {
        const tax = (income * 20) / 100;
        const earnings = income - tax;
        sum = sum + earnings;
      } else {
        sum = sum + income;
      }
    }

    const totalSavings = sum - livingCost;
    if (totalSavings < 0) {
      return "earn more";
    } else {
      return totalSavings;
    }
  }
}

const arrayOfNumbers =[ 1000 , 2000 , 3000 ];
const output = monthlySavings(arrayOfNumbers,5400);
console.log(output);
