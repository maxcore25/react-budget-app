import React, { useContext, useState } from 'react';

const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}
export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  function getBudgetExpenses() {}
  function addExpense() {}
  function addBudget() {}
  function deleteBudget() {}
  function deleteExpense() {}

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}>
      {children}
    </BudgetsContext.Provider>
  );
};
