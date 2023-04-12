import * as userController from "../controllers/userController";

export default [
  {
    method: "POST",
    path: "/user/create",
    handler: userController.createUser,
  },
  {
    method: "GET",
    path: "/user/find/${email}",
    handler: userController.findUserByEmail,
  }
]