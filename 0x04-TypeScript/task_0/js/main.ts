interface Student {
  firstName: string,
  lastNmae: string,
  age: number,
  location: string
}

const student: Student = {
  firstName: 'Bob',
  lastNmae: 'Swagger',
  age: 36,
  location: 'France'
};

const studentOne: Student = {
  firstName: 'John',
  lastNmae: 'Nelson',
  age: 41,
  location: 'South Africa'
};

const studentsList: Student[] = [student, studentOne];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const tableHead: HTMLTableSectionElement = document.createElement('thead');
const thead1: HTMLTableCellElement = document.createElement('th');
thead1.innerText = 'First Name';
const thead2: HTMLTableCellElement = document.createElement('th');
thead2.innerText = 'Location';

tableHead.append(thead1);
tableHead.append(thead2);
table.append(thead);
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const column: HTMLTableCellElement = document.createElement('td');
  column.innerText = student.firstName;
  const column1: HTMLTableCellElement = document.createElement('td');
  column1.innerText = student.location;
  row.append(column);
  row.append(column1);
  table.append(row);
});

body.append(table);
