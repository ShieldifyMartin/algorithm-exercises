function gradingStudents(grades) {
  const finalGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let currentGrade = grades[i];
    if (currentGrade >= 38) {
      const nextMultiple5 = Math.ceil(currentGrade / 5) * 5;
      if (nextMultiple5 - currentGrade < 3) {
        currentGrade = nextMultiple5;
      }
    }
    finalGrades.push(currentGrade);
  }
  return finalGrades;
}
