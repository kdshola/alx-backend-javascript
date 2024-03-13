interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) : string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new(firstName: string, lastName: string): Student;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;
  }

   workOnHomework(): string {
     return 'Currently working';
   }

   displayName(): string {
     return this.firstName;
   }
}

const student = new StudentClass('Ryu', 'Ten');
console.log(student.displayName());
console.log(student.workOnHomework());
