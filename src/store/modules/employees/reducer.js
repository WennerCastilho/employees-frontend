export const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case "@employees/ALL":
      return action.employees;

    case "@employees/REMOVE":
      return state.filter((employee) => employee.id !== action.employee.id);

    case "@employees/UPDATE":
      let employees_update = [
        ...state.filter((employee) => employee.id !== action.employee.data.id),
        action.employee.data,
      ];
      return employees_update.sort((a, b) =>
        a.id < b.id ? -1 : a.id > b.id ? 1 : 0
      );

    default:
      return state;
  }
};
