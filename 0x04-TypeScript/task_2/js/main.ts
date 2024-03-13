interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
  
export class Director implements DirectorInterface {
  workFromHome = () : string => 'Working from home';
  getCoffeeBreak = () : string => 'Getting a coffee break';
  workDirectorTasks = () : string => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  getCoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

export function createEmployee(salary: number | string): Teacher | Director {
  return (Number(salary) < 500) ? new Teacher() : new Director();
}

export function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Teacher | Director): void {
  const result: string = (isDirector(employee)) ? employee.workDirectorTasks() : employee.workTeacherTasks();
  console.log(result);
}

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
 return todayClass === 'History' ? 'Teaching History' : 'Teaching Math';
}
