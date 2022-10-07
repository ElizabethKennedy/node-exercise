import express from "express";
import userRouter from "./users.route";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", useRouter);

export default router;









// this is from Ben's walkthrough example

// fetch("/api/users")
//  .then((res) => res.json())
// .then((data) => {
//    let ul = document.querySelector("#userList");
// for (let user of data) {
// let li = document.createElement("li");
// li.textContent = `${user.firstName} ${user.lastName} `;
//  ul.appendChild(li);

  // }
//   });