import axios, { AxiosInstance } from "axios";

export const gitHub: AxiosInstance = axios.create({
  baseURL: "https://api.github.com",
  withCredentials: false,
});
