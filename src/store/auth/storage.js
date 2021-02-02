import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
    console.log("token stored");
  } catch (error) {
    console.log("Error storing the auth token: ", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
    console.log("token retrieved");
  } catch (error) {
    console.log("Error fetching the auth token: ", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log("token deleted");
  } catch (error) {
    console.log("Error removing the auth token: ", error);
  }
};

export default { storeToken, getToken, getUser, removeToken };
