import axios from "axios";

export const api = axios.create({
  baseURL: "https://avaliacaomercado.herokuapp.com",
});
