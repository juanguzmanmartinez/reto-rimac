import { client } from '../helpers/axios';

export const getUser = async () => {
  const responseUser = await client.get('user.json');
  const { data } = responseUser;
  return data;
};

export const getPlans = async () => {
  const responsePlans = await client.get('plans.json');
  const { data } = responsePlans;
  return data;
};
