
var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7]
};

// vanilla function to calculate the annual cost
function calcAnnual(plan, percentIfDisc) {
    var bestPrice = plan.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth(); // Get the current month (0-indexed)

    // Check if the current month is a discount month
    for (var i = 0; i < plan.discountMonths.length; i++) {
        if (plan.discountMonths[i] === thisMo) {
            bestPrice = plan.price * percentIfDisc; // Apply discount
            break;
        }
    }

    return bestPrice * 12; // Return the annual cost
}

// Call the function for plan1 with a 20% discount if applicable
var annualCost = calcAnnual(plan1, 0.8); // 0.8 represents 20% off
console.log(annualCost); // Output: Annual cost with or without discount
