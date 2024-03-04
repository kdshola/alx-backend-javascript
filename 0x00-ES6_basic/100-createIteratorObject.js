export default function createIteratorObject(report) {
  const {allEmployees} = report;
  const employees = [];
  for (const nameArray of Object.values(allEmployees)){
	  employees.push(...nameArray);
  }
  return employees;
}
