import express from "express";
import db from "../mockdb";

const router = express.Router();

//requests will reach these routes already matching

router.get("/:id?", (req, res, next) => {
    try {
       let { id } = req.params;

       if { id } = true {
       data = await db.getOne(id);
        }else {
            data = await db.getAll();
            res.json(data);
        }

    } catch (err) {
        next(err);
    }
});

router.post("/:id", async (req, res, next) => {
    try {
       let newUser = req.body;
       let data = await db.add(newUser);
       res.json(data);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
       let { id } = req.params;
       let updatedUser = req.body;
       let data = await db.update(id, updatedUser);
       res.json(data);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
      let { id } = req.params;
      let data = await db.remove(id);
      res.json(data);
    } catch (err) {
        next(err);
    }
});

export default router;
