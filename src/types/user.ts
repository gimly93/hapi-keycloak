import { z } from "zod";


export const createUserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    passwordHash: z.string(),
    email: z.string(),
})
export interface IUser {
  firstName: string;
  lastName: string;
  passwordHash: string;
  email: string;
}
