import axios from "axios";

export const requestProducts = async () => {
  const { data } = await axios.get(
    "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
  );
  return data;
};

export const requestProductsByQuery = async (query = '') => {
  const { data } = await axios.get(
    `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?search=${query}`
  );
  return data;
};

export const requestProductsByIds = async (ids) => {
  const requests = ids.map(id =>
    fetch(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
  );
  const responses = await Promise.all(requests);
  const data = await Promise.all(responses.map(res => res.json()));
  return { items: data };
};


export const requestProductCardById = async (productId) => {
  const { data } = await axios.get(
    `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${productId}`
  );
  return data;
};
