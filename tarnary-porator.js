// let number = Number(prompt("inter your number"));

// number > 0 ? console.log("projative") : console.log("nagative")




let roll = Number(prompt("inter your Roll"))

let result = roll === 1 ? "A+" : roll == 2 ? "B" : roll == 3 ? "C" : roll == 4 ? "D" : "F";

console.log(result);




let amount = 1200;

let discount = amount >= 5000 ? "30% Discount"
             : amount >= 3000 ? "20% Discount"
             : amount >= 1000 ? "10% Discount"
             : "No Discount";

console.log(discount);
