import client from "./client";

/** all user related post/get requests methods */

const register = (userInfo) => client.post("/user/create", userInfo);
const login = (email, password) =>
  client.post("/user/auth", { email, password });

export default { register, login };
