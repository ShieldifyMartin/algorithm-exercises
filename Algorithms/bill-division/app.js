function bonAppetit(bill, k, b) {
  let annPart = 0;
  for (let i = 0; i < bill.length; i++) {
    const currentBill = bill[i];
    if (i !== k) {
      annPart += currentBill;
    }
  }

  let annBill = annPart / 2;
  if (b === annBill) {
    console.log("Bon Appetit");
  } else {
    const difference = b - annBill;
    console.log(difference);
  }
}
