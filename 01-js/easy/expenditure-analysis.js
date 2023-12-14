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
  const recordDb = new Map();
  transactions.forEach((element) => {
    recordDb.set(
      element.category,
      (recordDb.get(element.category) || 0) + parseInt(element.price)
    );
  });
  console.log(recordDb);
  const expense = [];

  recordDb.forEach((value, key) => {
    // console.log("entered");
    expense.push({ category: key, totalSpent: value });
  });
  return expense;
}

module.exports = calculateTotalSpentByCategory;
