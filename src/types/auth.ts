import {z} from "zod";

export interface IAuthData {
    email: string,
    password: string
}
export const loginUserSchema = z.object({
    password: z.string(),
    email: z.string(),
})