import axios from "axios";

export const Api = axios.create({
  baseURL: "https://go-fresh-db.herokuapp.com",
});
