function getMoneySpent(keyboards, drives, b) {
  let purchase = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let currentPurchasePrice = 0;
      currentPurchasePrice += keyboards[i];
      currentPurchasePrice += drives[j];

      if (currentPurchasePrice <= b && currentPurchasePrice >= purchase) {
        purchase = currentPurchasePrice;
      }
    }
  }

  return purchase === 0 ? -1 : purchase;
}
