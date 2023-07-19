
import { api } from './config';

const url = `http://${api.host}:${api.port}${api.endpoint}`;

const doPost = async (action, data = {}) => {
  return await fetch(url + action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const cities = async () => {
  return await doPost("/cities").then((json) => json.cities);
};

export const customersByCity = async ({ city }) => {
  return await doPost("/customers-by-city", { city }).then(
    (json) => json.customers
  );
};

export const customer = async ({ id }) => {
  return await doPost("/customer", { id });
};
