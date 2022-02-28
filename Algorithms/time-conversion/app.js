function timeConversion(s) {
  const type = s[s.length - 2] + s[s.length - 1];
  let timeStr = s.substring(0, s.length - 2);
  const timeParts = timeStr.split(":");

  if (type === "PM") {
    if (timeParts[0] < 12) {
      timeParts[0] = Number(timeParts[0]) + 12;
    }
  } else if (type === "AM") {
    if (timeParts[0] > 11) {
      timeParts[0] = ("0" + (Number(timeParts[0]) - 12)).slice(-2);
    }
  }

  timeStr = timeParts.join(":");
  return timeStr;
}
