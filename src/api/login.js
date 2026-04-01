import axios from "@/axios";

export const login = async (username, password) => {
  return await axios.post("/admin/login", { username, password });
};
