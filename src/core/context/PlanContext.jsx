import { createContext, useState } from 'react';

export const PlanContext = createContext();

export const PlanContextProvider = ({ children }) => {
  const [plan, setPlan] = useState({});

  const selectPlan = async (data) => {
    setPlan(data);
  };

  return (
    <PlanContext.Provider value={{ selectPlan, plan }}>
      {children}
    </PlanContext.Provider>
  );
};
