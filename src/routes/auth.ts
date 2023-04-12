import * as authController from "../controllers/authController";

export default [
  {
    method: "POST",
    path: "/login",
    handler: authController.login,
  },
  {
    method: "GET",
    path: "/user",
    handler: authController.getUserData,
  }
]