import axios from "axios";

export const postgrest = axios.create({
  baseURL: import.meta.env.VITE_POSTGREST_API_URL,
});

console.log(
  "🗄️ PostgREST Base URL:",
  import.meta.env.VITE_POSTGREST_API_URL
);