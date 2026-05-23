import express from "express";
import { assets } from "../services/assetsData";

const router = express.Router();

router.get("/", (req, res) => {

    res.json(assets);

});

export default router;
