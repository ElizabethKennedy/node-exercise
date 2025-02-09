import config from '../config';
import mysql from'mysql';
import express from "express";
import userRouter from "./users.route";


const router = express.Router();

router.get("/test", (req, res) => {
    res.send("working");
});

router.use("/users", userRouter);

router.use("/employees", employeeRouter);

export default router;
