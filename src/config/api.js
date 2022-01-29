import axios from "axios";

export const API = axios.create({
  baseURL: process.env.SERVER_URL || "https://api-hollyways.herokuapp.com/api/v1" || "http://localhost:5000/api/v1"
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
