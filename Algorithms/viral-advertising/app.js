function viralAdvertising(n) {
  let shared = 5,
    likes = 0,
    totalLikes = 0;
  for (let i = 1; i <= n; i++) {
    likes = Math.floor(shared / 2);
    shared = likes * 3;
    totalLikes += likes;
  }
  return totalLikes;
}
