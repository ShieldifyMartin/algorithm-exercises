function designerPdfViewer(h, word) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let letterHeight = [];

  for (let i = 0; i < word.length; i++) {
    letterHeight.push(h[letters.indexOf(word[i])]);
  }

  const size = Math.max(...letterHeight) * word.length;
  return size;
}
