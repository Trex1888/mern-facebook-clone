import axios from "axios";

export const baseURL = "https://mern-fbook.herokuapp.com";

const instance = axios.create({
  // baseURL: "https://mern-fbook.herokuapp.com",
  // baseURL: "http://localhost:9000",
  baseURL: baseURL,
});

export default instance;
