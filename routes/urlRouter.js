/** @format */

const express = require("express");
const {handleGenerateNewShortUrl, handleShortUrl} = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get('/:shortId', handleShortUrl)

module.exports = router;
