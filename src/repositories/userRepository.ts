import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { IUser } from "../types/user";
import { USER_ALREADY_EXISTS } from "../constants/errorMessages";

class UserRepository {
  private readonly userRepo: Repository<User> =
    AppDataSource.getRepository(User);
  async createUser(userDto: IUser) {
    const userExistsCheck = await this.findUserByEmail(userDto.email);
    if (userExistsCheck?.length) {
      throw new Error(USER_ALREADY_EXISTS);
    }
    return this.userRepo.save(userDto);
  }
  async findUserByEmail(email: string) {
    return await this.userRepo.find({
      where: {
        email: email,
      },
    });
  }
}

export default new UserRepository();
