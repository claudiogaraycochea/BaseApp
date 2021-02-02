import { create } from "apisauce";
import authStorage from "../auth/storage";

const apiclient = create({
  baseURL: "https://d1ph2nz7q92awg.cloudfront.net/api",
});

apiclient.addAsyncRequestTransform(async (request) => {
  //authtoken
  const authToken = await authStorage.getToken();
  console.log(authToken);
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiclient.get;
apiclient.get = async (url, params, axiosConfig) => {
  console.log(url, params, axiosConfig);
  const response = await get(url, params, axiosConfig);
  console.log("client response", response);
  if (response.ok) {
    return response;
  }
  return response;
};

export default apiclient;
