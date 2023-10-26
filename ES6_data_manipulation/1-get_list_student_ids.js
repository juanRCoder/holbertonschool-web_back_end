export default function getListStudentsIds(arrObjects) {
  if (!Array.isArray(arrObjects)) return [];
  return arrObjects.map((student) => student.id);
}
