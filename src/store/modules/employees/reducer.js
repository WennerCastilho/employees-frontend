export const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case "@employees/ALL":
      return action.employees;

    default:
      return state;
  }
};
