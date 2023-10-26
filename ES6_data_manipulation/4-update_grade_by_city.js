export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updateGrade = newGrade
	.find((grade) => grade.studentId === student.id);
      const grade = updateGrade ? updateGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
