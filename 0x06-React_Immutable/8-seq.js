import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const highGrades = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      score: student.score,
      firsName:
        student.firsName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName:
        student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));
  console.log(highGrades.toObject());
}
