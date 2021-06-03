export const allEmployees = (employees) => ({
  type: "@employees/ALL",
  employees,
});

export const removeEmployee = (employee) => ({
  type: "@employees/REMOVE",
  employee,
});
