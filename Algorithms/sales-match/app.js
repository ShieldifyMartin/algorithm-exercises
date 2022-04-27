function sockMerchant(n, ar) {
  let countSocks = 0;
  let calculated = [];
  for (let i = 0; i < ar.length; i++) {
    const currentSock = ar[i];
    if (calculated.includes(currentSock)) {
      continue;
    }

    let tempCount = 0;
    for (let j = i; j < ar.length; j++) {
      if (currentSock == ar[j]) {
        tempCount++;
      }
    }

    countSocks += Math.floor(tempCount / 2);
    calculated.push(ar[i]);
  }
  return countSocks;
}
