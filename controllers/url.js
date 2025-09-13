/** @format */

const URL = require("../models/url");
const id = require("short-id");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({err: "URL required"});

  const shortId = id.generate();
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", {id: shortId});
}

async function handleShortUrl(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (!entry) return res.status(404).json({err: "short url not found"});

  res.redirect(entry.redirectURL);
}

async function handelUrlAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({shortId});
  return res.json({
    analytics: result.visitHistory,
    totalClicks: result.visitHistory.length,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
  handleShortUrl,
  handelUrlAnalytics,
};
