import { IUser } from "../types/user";
import userRepository  from "../repositories/userRepository";

export const createUser = (userDto: IUser) => {
  return userRepository.createUser(userDto)
};
export const getUserByEmail = (email: string) => {
  return userRepository.findUserByEmail(email)
};

