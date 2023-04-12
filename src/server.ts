import * as Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import "reflect-metadata";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
export let server: Server;

export const init = async function (): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 4000,
    host: "0.0.0.0",
  });

  server.route([...userRoutes, ...authRoutes]);

  return server;
};

export const start = async function (): Promise<void> {
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
  return server.start();
};

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});
