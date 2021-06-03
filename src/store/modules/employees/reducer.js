export const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case "@employees/ALL":
      return action.employees;

    case "@employees/REMOVE":
      return state.filter((employee) => employee.id !== action.employee.id);

    default:
      return state;
  }
};
