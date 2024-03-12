export default function getListStudentIds(studentList) {
  if (studentList.constructor === Array) {
    return studentList.map((student) => student.id);
  }
  return [];
}
