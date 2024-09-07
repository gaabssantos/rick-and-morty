import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/character";

export const api = async (url = baseURL) => {
  const { data } = await axios.get(url);

  return data;
};
