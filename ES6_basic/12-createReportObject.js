export default function createReportObject(employeesList) {
  const allEmployees = {};

  Object.keys(employeesList).forEach((dep) => {
    allEmployees[dep] = [...employeesList[dep]];
  });
  const obj = {
    allEmployees,

    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return obj;
}
