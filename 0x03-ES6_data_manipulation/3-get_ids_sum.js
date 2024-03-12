export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sumId, student) => sumId + student.id, 0);
}
