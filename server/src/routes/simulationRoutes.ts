import express from "express";
import { assets } from "../services/assetsData";
import { simulateAttack } from "../simulation/attackSimulator";

const router = express.Router();

router.get("/", (req, res) => {

    const randomAsset =
        assets[
            Math.floor(Math.random() * assets.length)
        ];

    const result =
        simulateAttack(randomAsset);

    res.json(result);

});

export default router;