import { Request } from "@hapi/hapi";
import { getUserInfo, verifyUserData } from "../services/keycloakService";
import { loginUserSchema } from "../types/auth";
import * as Boom from "boom";

export const login = async (request: Request) => {
  try {
    const parsedBody = loginUserSchema.parse(request.payload);
    return await verifyUserData(parsedBody);
  } catch (error: any) {
    return Boom.badRequest(error.message);
  }
};

export const getUserData = async (request: Request) => {
  try {
    const authToken = request.headers["authorization"];
    if (!authToken) {
      throw new Error("No access token provided");
    }

    return await getUserInfo(authToken);
  } catch (error: any) {
    return Boom.badRequest(error.message);
  }
};
