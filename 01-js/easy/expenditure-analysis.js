/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store the total spent per category
  const totalsByCategory = transactions.reduce((acc, transaction) => {
      // If the category is not already in the accumulator, initialize it
      if (!acc[transaction.category]) {
          acc[transaction.category] = 0;
      }
      // Add the transaction's price to the corresponding category's total
      acc[transaction.category] += transaction.price;
      return acc;
  }, {});

  // Convert the totalsByCategory object into an array of objects
  const result = Object.keys(totalsByCategory).map(category => {
      return { category: category, totalSpent: totalsByCategory[category] };
  });

  return result;
}


module.exports = calculateTotalSpentByCategory;
