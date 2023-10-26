export default function getListStudents() {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  const newArr = students.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
  }));

  return newArr;
}
