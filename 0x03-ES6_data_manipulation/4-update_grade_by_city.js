export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const students = studentList.filter((student) => student.location === city);
  const newStudents = students.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: (gradeObj) ? gradeObj.grade : 'N/A' };
  });
  return newStudents;
}
