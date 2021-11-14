const express = require('express');
const router = express.Router();
const axios = require('axios');
const { StatusCodes } = require('http-status-codes');

const { URL } = require('../utils/config');

axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8';

router.get('/api/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const { page } = req.query;

    const url = !page
      ? `${URL}/api/${category}`
      : `${URL}/api/${category}?page=${page}`;

    const { data } = await axios.get(url).catch((error) => {
      res.status(StatusCodes.BAD_REQUEST).json({
        error,
        status: StatusCodes.BAD_REQUEST,
      });
    });

    res.status(StatusCodes.OK).json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
