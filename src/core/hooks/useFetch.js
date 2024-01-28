import { useEffect, useState } from 'react';
import { getPlans } from './../api/api';

export const useFetch = () => {
  const [plans, setPlans] = useState([]);

  const fetchPlans = async () => {
    const { list } = await getPlans();
    setPlans(list);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return {
    plans,
  };
};
