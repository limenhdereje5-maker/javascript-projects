** start of script.js **

const inventory = [];

// Find the index of a product by name (case-insensitive)
function findProductIndex(name) {
  const productName = name.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      return i;
    }
  }
  return -1;
}

// Add product to inventory
function addProduct(product) {
  const productName = product.name.toLowerCase();
  const index = findProductIndex(productName);

  if (index !== -1) {
    // Product exists → update quantity
    inventory[index].quantity += product.quantity;
    console.log(productName + " quantity updated");
  } else {
    // Product does not exist → add it
    inventory.push({
      name: productName,
      quantity: product.quantity
    });
    console.log(productName + " added to inventory");
  }
}

// Remove product from inventory
function removeProduct(name, quantity) {
  const productName = name.toLowerCase();
  const index = findProductIndex(productName);

  if (index === -1) {
    console.log(productName + " not found");
    return;
  }

  const currentQuantity = inventory[index].quantity;

  if (currentQuantity < quantity) {
    console.log(
      `Not enough ${productName} available, remaining pieces: ${currentQuantity}`
    );
    return;
  }

  // Enough quantity → subtract
  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    // Remove product completely
    inventory.splice(index, 1);
  }

  console.log(
    `Remaining ${productName} pieces: ${inventory[index]?.quantity || 0}`
  );
}


** end of script.js **

