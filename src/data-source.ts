import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  connectorPackage: "mysql2",
  port: 3306,
  username: "user",
  password: "password",
  database: "db",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["src/migration/**/*.ts"],
});
