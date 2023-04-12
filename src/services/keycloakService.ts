import { IAuthData } from "../types/auth";
import axios from "axios";
import qs = require("qs");
import {
  K_CLIENT_ID,
  K_CLIENT_SECRET,
  K_REALM_NAME,
  K_URL,
} from "../configs/keycloak";
export const verifyUserData = async (authData: IAuthData) => {
  const url = `${K_URL}/auth/realms/${K_REALM_NAME}/protocol/openid-connect/token`;
  const result = await axios.post(
    url,
    qs.stringify({
      grant_type: "password",
      client_id: K_CLIENT_ID,
      username: authData.email,
      password: authData.password,
      client_secret: K_CLIENT_SECRET,
    }),
    {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    }
  );
  return result.data;
};
export const getUserInfo = async (accessToken: string) => {
  const tokenUrl = `${K_URL}/auth/realms/${K_REALM_NAME}/protocol/openid-connect/userinfo`;
  const result = await axios.get(tokenUrl, {
    headers: {
      Authorization: accessToken,
    },
  });
  return result.data;
};
