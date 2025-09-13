const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const urlRoute = require("./routes/urlRouter");
const analyticsRoute = require("./routes/analyticsRoute");
const staticRoute = require("./routes/staticRouter");
const userRoute = require('./routes/userRouter')
const { connectToMongoDB } = require("./connect");
const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth');
const URL = require("./models/url");
const path = require("path");
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Mount routes correctly
app.use('/user', userRoute)
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/analytics", analyticsRoute);
app.use("/", checkAuth, staticRoute);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
