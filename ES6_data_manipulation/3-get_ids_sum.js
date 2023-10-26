export default function getStudentIdsSum(students) {
  return students.reduce((acm, student) => acm + student.id, 0);
}
