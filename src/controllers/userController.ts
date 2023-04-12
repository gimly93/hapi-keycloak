import { Request } from "@hapi/hapi";
import * as userService from "../services/userService";
import { createUserSchema } from "../types/user";
import * as Boom from "boom";

export const createUser = async (request: Request) => {
  try {
    const parsedBody = createUserSchema.parse(request.payload);
    return await userService.createUser(parsedBody);
  } catch (error: any) {
    return Boom.badRequest(error.message);
  }
};
export const findUserByEmail = async (request: Request) => {
  try {
    const email = request.params.email;
    if (!email) {
      throw new Error("Email not provided");
    }
    return await userService.getUserByEmail(email);
  } catch (error: any) {
    return Boom.badRequest(error.message);
  }
};
