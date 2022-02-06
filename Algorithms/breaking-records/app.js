function breakingRecords(scores) {
  let recordBreakCounter = 0;
  let worstRecordBreakCounter = 0;
  let currentRecord = scores[0];
  let currentWorstRecord = scores[0];

  for (let i = 1; i < scores.length; i++) {
    const currentScore = scores[i];
    if (currentRecord < currentScore) {
      currentRecord = currentScore;
      recordBreakCounter++;
    } else if (currentWorstRecord > currentScore) {
      currentWorstRecord = currentScore;
      worstRecordBreakCounter++;
    }
  }

  const result = [recordBreakCounter, worstRecordBreakCounter];
  return result;
}
