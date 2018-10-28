import axios from "axios";

export const api = () => {
  return axios.create({
    baseURL: `https://beetle-backend.herokuapp.com/api`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};