export const allEmployees = (employees) => ({
  type: "@employees/ALL",
  employees,
});

export const removeEmployee = (employee) => ({
  type: "@employees/REMOVE",
  employee,
});

export const updateEmployee = (employee) => ({
  type: "@employees/UPDATE",
  employee,
});

export const addEmployee = (employee) => ({
  type: "@employees/ADD",
  employee,
});
