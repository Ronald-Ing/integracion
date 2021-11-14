const express = require("express");
const router = express.Router();
const axios = require("axios");
const { StatusCodes } = require("http-status-codes");
const replacer = new RegExp("https://swapi.dev/api/", "g");
const newUrl = "http://localhost:4000/"

const { URL } = require("../utils/config");

axios.defaults.headers["Content-Type"] = "application/json; charset=UTF-8";

router.get("/", async(req, res) => {
    try {
        const { q: query } = req.query;

        const url = `${URL}/`;

        const { data } = await axios.get(url).catch((error) => {
            res.status(StatusCodes.BAD_REQUEST).json({
                error,
                status: StatusCodes.BAD_REQUEST,
            });
        });
        var obj = JSON.stringify(data).replace(replacer, newUrl);
        res.status(StatusCodes.OK).json(JSON.parse(obj));
    } catch (error) {
        console.log(error);
    }
});

router.get("/people/", async(req, res) => {
    try {
        debugger
        const { q: query } = req.query;

        const url = `${URL}/people`;

        const { data } = await axios.get(url).catch((error) => {
            res.status(StatusCodes.BAD_REQUEST).json({
                error,
                status: StatusCodes.BAD_REQUEST,
            });
        });
        var obj = JSON.stringify(data).replace(replacer, newUrl);
        res.status(StatusCodes.OK).json(JSON.parse(obj));
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;