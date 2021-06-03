import { createStore, combineReducers } from "redux";

import { employeesReducer } from "./modules/employees/reducer";

const reducers = combineReducers({ employees: employeesReducer });

export const store = createStore(reducers);
