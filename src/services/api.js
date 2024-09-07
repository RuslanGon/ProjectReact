import axios from "axios";

export const requestProducts = async () => {
  const { data } = await axios.get(
    "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
  );
  return data;
};

export const requestProductsByQuery = async (query = '') => {
  const { data } = await axios.get(
    `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?name_like=${query}`
  );
  return data;
};

